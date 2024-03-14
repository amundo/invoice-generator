class AddLogo extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<figure>
      <figcaption>
        <details data-html2canvas-ignore>
        <summary>Edit…</summary>
        <input type="file" id="imageInput" accept="image/*" />
        </details>
      </figcaption>
      <img>
    </figure>`;
    this.listen();
  }

  connectedCallback() {
    // Attempt to load and display an image if its name is stored
    const storedFileName = localStorage.getItem('storedFileName');
    if (storedFileName) {
      const imageData = localStorage.getItem(storedFileName);
      if (imageData) {
        this.querySelector('img').src = imageData;
      }
    }
  }

  set data(imageData) {
    if (this.fileName && imageData) {
      console.log(this.fileName);
      this.querySelector('img').src = imageData;
      localStorage.setItem('storedFileName', this.fileName); // Store the file name
      localStorage.setItem(this.fileName, imageData); // Store the image data
    }
  }

  listen() {
    this.querySelector('input[type=file]').addEventListener('change', (changeEvent) => {
      const file = changeEvent.target.files[0];
      if (file) {
        this.fileName = file.name; // Set fileName here so it's available when setting data
        const reader = new FileReader();
        reader.addEventListener('loadend', (loadendEvent) => {
          const result = loadendEvent.target.result;
          this.data = result; // Store the Base64 string in localStorage
        });
        reader.readAsDataURL(file);
      }
    });
  }
}

export { AddLogo };
customElements.define('add-logo', AddLogo);
