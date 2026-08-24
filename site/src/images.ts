export type ImageFormats = {
  jpeg: string;
  webp: string;
};

export type OptimizedImage = {
  source: string;
  width: number;
  height: number;
  variants: {
    card: ImageFormats;
    display: ImageFormats;
  };
};

type ImageRenderOptions = {
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  decoding?: 'async' | 'sync' | 'auto';
  width?: number;
  height?: number;
};

function renderAttrs(options: ImageRenderOptions): string {
  const className = options.className ? ` class="${options.className}"` : '';
  const loading = options.loading ? ` loading="${options.loading}"` : '';
  const decoding = options.decoding ? ` decoding="${options.decoding}"` : '';
  const width = options.width ? ` width="${options.width}"` : '';
  const height = options.height ? ` height="${options.height}"` : '';
  return `${className}${loading}${decoding}${width}${height}`;
}

/** Single progressive JPEG — renders top-to-bottom as it downloads. */
export function renderProgressiveImage(
  image: OptimizedImage,
  variant: keyof OptimizedImage['variants'],
  alt: string,
  options: ImageRenderOptions = {},
): string {
  const src = image.variants[variant].jpeg;
  return `<img src="${src}" alt="${alt}"${renderAttrs(options)} />`;
}

/** WebP + fallback for assets that need transparency (logos). */
export function renderPicture(
  image: OptimizedImage,
  variant: keyof OptimizedImage['variants'],
  alt: string,
  options: ImageRenderOptions = {},
): string {
  const selected = image.variants[variant];
  const sizes = options.sizes ? ` sizes="${options.sizes}"` : '';

  return `
    <picture>
      <source type="image/webp" srcset="${selected.webp}"${sizes} />
      <img src="${selected.jpeg}" alt="${alt}"${renderAttrs(options)} />
    </picture>
  `.trim();
}
