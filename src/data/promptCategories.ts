
export interface PromptElement {
  name: string;
  value: string;
  description?: string;
}

export interface PromptCategory {
  id: string;
  name: string;
  description: string;
  elements: PromptElement[];
}

export const promptCategories: PromptCategory[] = [
  {
    id: "quality",
    name: "Quality Enhancers",
    description: "Basic quality and detail improvements",
    elements: [
      { name: "8K UHD", value: "8K UHD", description: "Ultra high definition quality" },
      { name: "HDR", value: "HDR", description: "High dynamic range" },
      { name: "Photorealistic", value: "photorealistic", description: "Extremely realistic look" },
      { name: "Masterpiece", value: "masterpiece", description: "Highest quality output" },
    ],
  },
  {
    id: "lighting",
    name: "Lighting",
    description: "Different lighting styles and effects",
    elements: [
      { name: "Golden Hour", value: "golden hour lighting", description: "Warm sunset lighting" },
      { name: "Studio Lighting", value: "professional studio lighting", description: "Clean, professional look" },
      { name: "Dramatic", value: "dramatic lighting", description: "High contrast theatrical lighting" },
      { name: "Natural", value: "natural lighting", description: "Soft, realistic lighting" },
    ],
  },
  {
    id: "camera",
    name: "Camera Settings",
    description: "Professional camera configurations",
    elements: [
      { name: "50mm", value: "50mm", description: "Standard portrait lens" },
      { name: "Bokeh", value: "bokeh effect", description: "Blurred background effect" },
      { name: "Depth of Field", value: "shallow depth of field", description: "Focus on subject" },
      { name: "Wide Angle", value: "wide angle shot", description: "Broader perspective" },
    ],
  },
  {
    id: "style",
    name: "Style",
    description: "Artistic styles and effects",
    elements: [
      { name: "Cinematic", value: "cinematic", description: "Movie-like quality" },
      { name: "Film Grain", value: "film grain", description: "Classic film texture" },
      { name: "Vintage", value: "vintage", description: "Retro aesthetic" },
      { name: "Modern", value: "modern style", description: "Contemporary look" },
    ],
  },
];

export const negativePrompts: string[] = [
  "blur",
  "noise",
  "artifacts",
  "distortion",
  "oversaturation",
  "unrealistic features",
  "watermark",
  "text",
  "bad quality",
  "low resolution",
];
