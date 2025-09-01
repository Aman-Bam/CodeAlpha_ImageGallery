class ImageGallery {
  constructor() {
    this.images = [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
        title: "Mountain Vista",
        description: "Breathtaking mountain landscape at sunrise",
        category: "nature",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/VillaSavoye.jpg/330px-VillaSavoye.jpg",
        title: "Modern Architecture",
        description: "Contemporary building design with clean lines",
        category: "architecture",
      },
      {
        src: "data:image/jpeg;base64,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",
        title: "Study",
        description: "Artistic portrait with natural lighting",
        category: "people",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/82/World_ocean_map.gif",
        title: "Ocean Waves",
        description: "Powerful waves crashing against rocks",
        category: "nature",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/500px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg",
        title: "Florence Cathedral",
        description: "Abstract architectural patterns",
        category: "architecture",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Commodore_64_PAL_horizontal_sync_and_colourburst.jpg/330px-Commodore_64_PAL_horizontal_sync_and_colourburst.jpg",
        title: "Color Burst",
        description: "Vibrant abstract composition",
        category: "abstract",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
        title: "Forest Path",
        description: "Mystical forest trail in morning light",
        category: "nature",
      },
      {
        src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=250&fit=crop",
        title: "Street Portrait",
        description: "Candid moment captured in urban setting",
        category: "people",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/India_Gate_on_the_evening_of_77th_Independence_day.jpg/330px-India_Gate_on_the_evening_of_77th_Independence_day.jpg",
        title: "India Gate",
        description: "Magnificent Mughal red sandstone fortress.",
        category: "architecture",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Agra_03-2016_10_Agra_Fort.jpg/500px-Agra_03-2016_10_Agra_Fort.jpg",
        title: "Agra Fort",
        description: "Magnificent Mughal red sandstone fortress.",
        category: "abstract",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
        title: "Golden Hour",
        description: "Sunset over rolling hills",
        category: "nature",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/6265_Dessau.JPG/500px-6265_Dessau.JPG",
        title: "Bauhaus building",
        description: "Bauhaus style co-started modernist architectur",
        category: "architecture",
      },
    ];

    this.currentFilter = "all";
    this.currentImageIndex = 0;
    this.filteredImages = [...this.images];

    this.init();
  }

  init() {
    this.renderGallery();
    this.setupEventListeners();
  }

  renderGallery() {
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = "";

    this.filteredImages.forEach((image, index) => {
      const item = document.createElement("div");
      item.className = "gallery-item fade-in";
      item.setAttribute("data-category", image.category);
      item.setAttribute("data-index", index);

      item.innerHTML = `
                        <img src="${image.src}" alt="${image.title}" loading="lazy">
                        <div class="image-overlay">
                            <div class="image-info">
                                <h3>${image.title}</h3>
                                <p>${image.description}</p>
                            </div>
                        </div>
                    `;

      grid.appendChild(item);
    });
  }

  setupEventListeners() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        e.target.classList.add("active");
        this.filterImages(e.target.dataset.filter);
      });
    });

    document.addEventListener("click", (e) => {
      const galleryItem = e.target.closest(".gallery-item");
      if (galleryItem) {
        const index = parseInt(galleryItem.dataset.index);
        this.openLightbox(index);
      }
    });

    document
      .getElementById("closeBtn")
      .addEventListener("click", () => this.closeLightbox());
    document
      .getElementById("prevBtn")
      .addEventListener("click", () => this.previousImage());
    document
      .getElementById("nextBtn")
      .addEventListener("click", () => this.nextImage());

    document.addEventListener("keydown", (e) => {
      if (document.getElementById("lightbox").classList.contains("active")) {
        switch (e.key) {
          case "Escape":
            this.closeLightbox();
            break;
          case "ArrowLeft":
            this.previousImage();
            break;
          case "ArrowRight":
            this.nextImage();
            break;
        }
      }
    });

    document.getElementById("lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") {
        this.closeLightbox();
      }
    });

    let startX = 0;
    let endX = 0;

    document.getElementById("lightbox").addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    document.getElementById("lightbox").addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.nextImage();
        } else {
          this.previousImage();
        }
      }
    });
  }

  filterImages(filter) {
    this.currentFilter = filter;

    if (filter === "all") {
      this.filteredImages = [...this.images];
    } else {
      this.filteredImages = this.images.filter(
        (img) => img.category === filter
      );
    }

    this.renderGallery();
  }

  openLightbox(index) {
    this.currentImageIndex = index;
    const image = this.filteredImages[index];

    document.getElementById("lightboxImg").src = image.src;
    document.getElementById("lightboxTitle").textContent = image.title;
    document.getElementById("lightboxDesc").textContent = image.description;
    document.getElementById("counter").textContent = `${index + 1} of ${
      this.filteredImages.length
    }`;

    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.filteredImages.length;
    this.updateLightboxImage();
  }

  previousImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.filteredImages.length) %
      this.filteredImages.length;
    this.updateLightboxImage();
  }

  updateLightboxImage() {
    const image = this.filteredImages[this.currentImageIndex];
    document.getElementById("lightboxImg").src = image.src;
    document.getElementById("lightboxTitle").textContent = image.title;
    document.getElementById("lightboxDesc").textContent = image.description;
    document.getElementById("counter").textContent = `${
      this.currentImageIndex + 1
    } of ${this.filteredImages.length}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ImageGallery();
});
