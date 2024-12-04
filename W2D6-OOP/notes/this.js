// method -> obj
// function -> global (window, global)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(tag);
    });
  },
  play() {
    console.log(this);
  },
};

video.play();

video.showTags();

video.stop = function () {
  console.log(this);
};

video.stop();

function playVideo() {
  console.log(this);
}

playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("b");
