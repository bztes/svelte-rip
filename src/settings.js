const settings = {
  fixed: false,
  sizes: null,
  fadeAfter: 500,
  src: (data) => data.src,
  width: (format) => format.width,
  alt: (data) => data.alt,
  title: (data) => data.title,
  formats: (data) => data.formats,
};

export default settings;
