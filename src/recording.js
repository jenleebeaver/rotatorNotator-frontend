//class constructor takes in object with key values pairs that are matched up to create an instance of a recording 
//This allows us to create instances of recording in custom functions
class Recording {
  //saving data into our object 
    constructor(data) {
      this.id = data.id;
      this.title = data.title;
      this.melody = data.melody;
      this.created_at = data.created_at
      Recording.all.push(this);
    }
  //adding data-id to our edit button 
    renderListItem() {
      return `
      <ul>
        <h2>Title: ${this.title}</h2>
        <h3>Melody: ${this.melody}</h3>
        <h3>Created at: ${this.created_at}</br>
        <button data-id=${this.id}>edit</button>
        </h3> 
      </ul>`;
    }

    static findById(id) {
      return this.all.find(recording => recording.id === id);
    }

    renderUpdateForm() {
      return `
      <form data-id=${this.id}>
        <label>Title</label>
        <p>
          <input type="text" value="${this.title}" />
        </p>
        <label>Content</label>
        <p>
          <textarea>${this.melody}</textarea>
        </p>
        <button type='submit'>Save Recording</button>
      </form>
    `;
    }

    update({ title, melody }) {
      this.title = title;
      this.melody = melody;
    }
  }
  
  Recording.all = [];