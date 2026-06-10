const images = Object.values(
  import.meta.glob("../assets/images-gallery/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
    eager: true,
    import: "default",
  }),
);

export default images;
