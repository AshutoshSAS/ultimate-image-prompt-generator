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
      { name: "16K", value: "16K resolution", description: "Maximum resolution detail" },
      { name: "HDR", value: "HDR", description: "High dynamic range" },
      { name: "Photorealistic", value: "photorealistic", description: "Extremely realistic look" },
      { name: "Masterpiece", value: "masterpiece", description: "Highest quality output" },
      { name: "Hyperrealistic", value: "hyperrealistic", description: "Beyond photorealistic" },
      { name: "Unreal Engine 5", value: "Unreal Engine 5 render", description: "Game engine quality" },
      { name: "Octane Render", value: "Octane render", description: "Professional 3D render" },
    ],
  },
  {
    id: "lighting",
    name: "Lighting",
    description: "Professional lighting techniques",
    elements: [
      { name: "Golden Hour", value: "golden hour lighting", description: "Warm sunset lighting" },
      { name: "Blue Hour", value: "blue hour lighting", description: "Soft twilight tones" },
      { name: "Studio", value: "professional studio lighting", description: "Clean, controlled lighting" },
      { name: "Dramatic", value: "dramatic lighting", description: "High contrast theatrical" },
      { name: "Natural", value: "natural lighting", description: "Soft, realistic lighting" },
      { name: "Rembrandt", value: "Rembrandt lighting", description: "Classic portrait style" },
      { name: "Ring Light", value: "ring light", description: "Even facial lighting" },
      { name: "Backlit", value: "backlit", description: "Subject lit from behind" },
      { name: "Volumetric", value: "volumetric lighting", description: "Visible light beams" },
    ],
  },
  {
    id: "camera",
    name: "Camera Settings",
    description: "Professional camera configurations",
    elements: [
      { name: "50mm f/1.8", value: "50mm f/1.8", description: "Standard portrait lens" },
      { name: "85mm f/1.4", value: "85mm f/1.4", description: "Premium portrait lens" },
      { name: "35mm", value: "35mm", description: "Street photography lens" },
      { name: "Bokeh", value: "perfect bokeh effect", description: "Blurred background" },
      { name: "Depth of Field", value: "shallow depth of field", description: "Subject focus" },
      { name: "Wide Angle", value: "wide angle shot", description: "Broad perspective" },
      { name: "Macro", value: "macro lens", description: "Extreme close-up" },
      { name: "Tilt-Shift", value: "tilt-shift", description: "Miniature effect" },
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
      { name: "Futuristic", value: "futuristic", description: "Advanced tech look" },
      { name: "Raw Photo", value: "RAW photo", description: "Unprocessed look" },
    ],
  },
  {
    id: "composition",
    name: "Composition",
    description: "Professional framing techniques",
    elements: [
      { name: "Rule of Thirds", value: "rule of thirds composition", description: "Classic composition" },
      { name: "Leading Lines", value: "leading lines", description: "Directional flow" },
      { name: "Symmetrical", value: "symmetrical composition", description: "Balanced frame" },
      { name: "Dynamic", value: "dynamic composition", description: "Energy and movement" },
      { name: "Minimalist", value: "minimalist composition", description: "Clean, simple frame" },
    ],
  },
  {
    id: "detail",
    name: "Detail Enhancement",
    description: "Specific detail improvements",
    elements: [
      { name: "Sharp Focus", value: "sharp focus", description: "Crystal clear details" },
      { name: "Intricate Details", value: "intricate details", description: "Fine textures" },
      { name: "Skin Details", value: "detailed skin texture", description: "Realistic skin" },
      { name: "Fabric Details", value: "detailed fabric texture", description: "Realistic materials" },
      { name: "Environment", value: "detailed environment", description: "Rich backgrounds" },
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
  "jpeg artifacts",
  "chromatic aberration",
  "wrong anatomy",
  "extra limbs",
  "duplicate features",
  "deformed features",
  "overexposed",
  "underexposed",
  "bad composition",
  "amateur",
];

export interface Preset {
  name: string;
  description: string;
  basePrompt: string;
  elements: Record<string, number>;
}

export const presets: Preset[] = [
  {
    name: "Professional Portrait",
    description: "Perfect for high-quality portrait photography",
    basePrompt: "professional portrait of a person",
    elements: {
      "photorealistic": 2,
      "85mm f/1.4": 1,
      "perfect bokeh effect": 1,
      "professional studio lighting": 2,
      "sharp focus": 1,
      "detailed skin texture": 1
    }
  },
  {
    name: "Cinematic Scene",
    description: "Movie-quality dramatic shot",
    basePrompt: "cinematic scene in a city",
    elements: {
      "cinematic": 2,
      "dramatic lighting": 1,
      "Unreal Engine 5 render": 1,
      "wide angle shot": 1,
      "volumetric lighting": 1
    }
  },
  {
    name: "Nature Photography",
    description: "Beautiful landscape photography",
    basePrompt: "beautiful landscape at sunset",
    elements: {
      "8K UHD": 2,
      "golden hour lighting": 2,
      "HDR": 1,
      "rule of thirds composition": 1,
      "detailed environment": 1
    }
  },
  {
    name: "Product Shot",
    description: "Professional product photography",
    basePrompt: "product photography of a luxury item",
    elements: {
      "macro lens": 1,
      "professional studio lighting": 2,
      "sharp focus": 2,
      "detailed fabric texture": 1,
      "minimalist composition": 1
    }
  }
];
