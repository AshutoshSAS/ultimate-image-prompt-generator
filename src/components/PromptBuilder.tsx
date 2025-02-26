
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { promptCategories, negativePrompts, presets } from "@/data/promptCategories";
import { toast } from "sonner";

const PromptBuilder = () => {
  const [selectedElements, setSelectedElements] = useState<Record<string, number>>({});
  const [basePrompt, setBasePrompt] = useState("");

  const updateElement = (elementValue: string, weight: number = 1) => {
    setSelectedElements((prev) => ({
      ...prev,
      [elementValue]: weight,
    }));
  };

  const removeElement = (elementValue: string) => {
    setSelectedElements((prev) => {
      const newElements = { ...prev };
      delete newElements[elementValue];
      return newElements;
    });
  };

  const applyPreset = (preset: typeof presets[number]) => {
    setBasePrompt(preset.basePrompt);
    setSelectedElements(preset.elements);
    toast.success(`Applied preset: ${preset.name}`);
  };

  const generatePrompt = () => {
    if (!basePrompt) {
      toast.error("Please enter a base prompt first");
      return "";
    }

    const elements = Object.entries(selectedElements)
      .map(([value, weight]) => `${value}::${weight}`)
      .join(", ");

    const negative = negativePrompts
      .map((prompt) => `--no ${prompt}`)
      .join(", ");

    return `${basePrompt}, ${elements}, ${negative}`.trim();
  };

  const copyToClipboard = () => {
    const prompt = generatePrompt();
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      toast.success("Prompt copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Ultimate Prompt Generator</h1>
          <p className="text-gray-600">Create highly detailed, realistic image prompts</p>
        </div>

        <div className="space-y-6">
          <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Presets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {presets.map((preset) => (
                <Card
                  key={preset.name}
                  className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => applyPreset(preset)}
                >
                  <h3 className="font-medium">{preset.name}</h3>
                  <p className="text-sm text-gray-600">{preset.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {Object.entries(preset.elements).slice(0, 3).map(([key]) => (
                      <Badge key={key} variant="secondary" className="text-xs">
                        {key}
                      </Badge>
                    ))}
                    {Object.keys(preset.elements).length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{Object.keys(preset.elements).length - 3} more
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg animate-fade-up">
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Base Prompt</span>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your base prompt..."
                  value={basePrompt}
                  onChange={(e) => setBasePrompt(e.target.value)}
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promptCategories.map((category) => (
                  <div key={category.id} className="space-y-3">
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <div className="space-y-2">
                      {category.elements.map((element) => (
                        <div
                          key={element.value}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Button
                            variant={selectedElements[element.value] ? "secondary" : "outline"}
                            onClick={() => updateElement(element.value)}
                            className="w-full justify-start"
                          >
                            {element.name}
                          </Button>
                          {selectedElements[element.value] && (
                            <div className="flex items-center space-x-2">
                              <Slider
                                value={[selectedElements[element.value]]}
                                min={1}
                                max={5}
                                step={1}
                                className="w-24"
                                onValueChange={([value]) => updateElement(element.value, value)}
                              />
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeElement(element.value)}
                              >
                                ×
                              </Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h3 className="font-medium text-gray-900 mb-2">Selected Elements</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(selectedElements).map(([value, weight]) => (
                    <Badge key={value} variant="secondary">
                      {value} (:{weight})
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-medium text-gray-900 mb-2">Generated Prompt</h3>
                <Card className="p-4 bg-gray-50">
                  <p className="text-sm font-mono break-words">{generatePrompt()}</p>
                </Card>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={copyToClipboard}>Copy Prompt</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PromptBuilder;
