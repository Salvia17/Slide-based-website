class Image {
  constructor(src, bgPosition) {
    this.src = src;
    this.bgPosition = bgPosition;
  }
}

class Nature {
  constructor(name) {
    this.name = name;
    this.images = [];
  }

  addImages(images, nature = "") {

    images.forEach(([image, bgPosition]) => {
      const src = nature ? `media/${nature}/${image}` : `media/${image}`

      const imageObj = new Image(src, bgPosition || "")

      this.images.push(imageObj)
    });

    return this;
  }
}

const natures = [
  new Nature("Nature").addImages([
    ["flower.jpg", 'center 60%']
  ], ""),

  new Nature("Beach").addImages([
    ["1.jpg", 'center 60%'], ["2.jpg", 'center 80%'], ["3.jpg", 'center 30%']
  ], "beach"),

  new Nature("Desert").addImages([
    ["1.jpg"], ["2.jpg", 'center 30%'], ["3.jpg", 'center 30%']
  ], "desert"),

  new Nature("Forest").addImages([
    ["1.jpg", 'center 30%'], ["2.jpg", 'center 30%'], ["3.jpg", 'center 30%']
  ], "forest"),

  new Nature("Meadow").addImages([
    ["1.jpg"], ["2.jpg", 'center 30%'], ["3.jpg"]
  ], "meadow"),

  new Nature("Mountains").addImages([
    ["1.jpg", 'center 30%'], ["2.jpg", 'center bottom'], ["3.jpg", 'center bottom']
  ], "mountains"),

  new Nature("Ocean").addImages([
    ["1.jpg"], ["2.jpg"], ["3.jpg"]
  ], "ocean"),

  new Nature("Snow").addImages([
    ["1.jpg"], ["2.jpg"], ["3.jpg"]
  ], "snow"),
]


const fullPageEl = document.getElementById("fullpage");

const createSlides = (images) => images.map(image => {
  const slide = document.createElement("div")
  slide.classList.add("slide")

  slide.style.backgroundImage = `url(${image.src})`
  slide.style.backgroundPosition = image.bgPosition

  return slide
})

const createSection = (nature) => {
  const section = document.createElement("section")
  section.classList.add("section")

  const slides = createSlides(nature.images)

  slides.forEach(slide => section.appendChild(slide))

  const title = document.createElement("h1")
  title.classList.add("title")
  title.innerText = nature.name

  section.appendChild(title)

  return section

}

natures.forEach(nature => {
  const section = createSection(nature)

  fullPageEl.appendChild(section)
})


const natureNames = natures.map(nature => nature.name)

new fullpage("#fullpage", {
  navigation: true,
  navigationPosition: "right",
  showActiveTooltip: true,
  navigationTooltips: natureNames,
})