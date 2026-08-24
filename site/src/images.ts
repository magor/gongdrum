export type ImageFormats = {
  jpeg: string;
  webp: string;
};

export type OptimizedImage = {
  source: string;
  width: number;
  height: number;
  placeholder: string;
  variants: {
    card: ImageFormats;
    display: ImageFormats;
  };
};

export function renderPicture(
  image: OptimizedImage,
  variant: keyof OptimizedImage['variants'],
  alt: string,
  options: {
    className?: string;
    loading?: 'lazy' | 'eager';
    sizes?: string;
    decoding?: 'async' | 'sync' | 'auto';
    width?: number;
    height?: number;
  } = {},
): string {
  const selected = image.variants[variant];
  const className = options.className ? ` class="${options.className}"` : '';
  const loading = options.loading ? ` loading="${options.loading}"` : '';
  const decoding = options.decoding ? ` decoding="${options.decoding}"` : '';
  const sizes = options.sizes ? ` sizes="${options.sizes}"` : '';
  const width = options.width ? ` width="${options.width}"` : '';
  const height = options.height ? ` height="${options.height}"` : '';

  return `
    <picture>
      <source type="image/webp" srcset="${selected.webp}"${sizes} />
      <img
        src="${selected.jpeg}"
        alt="${alt}"${className}${loading}${decoding}${width}${height}
        style="background-image:url('${image.placeholder}');background-size:cover"
      />
    </picture>
  `.trim();
}

export function imageFromPath(path: string, manifest: Record<string, OptimizedImage>): OptimizedImage | null {
  const normalized = path.replace(/^\.\//, '');
  const sourceKey = normalized.startsWith('obrazky/') ? normalized.slice('obrazky/'.length) : null;
  if (!sourceKey) return null;

  return manifest[sourceKey] ?? null;
}
