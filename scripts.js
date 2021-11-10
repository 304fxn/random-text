const texts = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id diam ac leo molestie faucibus. Nunc a dignissim tellus. Proin ultrices varius quam. Integer eu odio sit amet purus accumsan varius. Cras tincidunt quam ex, et consectetur dolor semper vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque hendrerit quam nunc.",
  "Nullam nibh diam, laoreet ac congue eget, vehicula eu purus. Cras in porta sapien. In tempor enim lacinia consectetur lacinia. Nunc consequat, nisl a blandit rhoncus, mi tortor consequat ligula, quis tincidunt diam ligula luctus est. Nulla sit amet neque accumsan, rhoncus sapien vitae, ullamcorper orci. Ut ac ipsum bibendum, commodo quam eu, accumsan metus. Donec ligula arcu, rutrum nec purus vitae, iaculis ultricies neque.",
  "Aenean vitae nisi a nibh finibus suscipit. Suspendisse quis mi sed risus fermentum porttitor. Quisque at mi nec lectus consequat convallis. Fusce volutpat diam lorem, a pharetra odio consectetur mollis. Fusce at ipsum lorem. Sed dignissim, est vehicula vehicula venenatis, massa tortor suscipit tellus, non pharetra purus augue ut nibh. Cras ultricies turpis ligula, nec tempus tortor tincidunt vitae. Aenean ut purus nec ex consectetur tincidunt ultricies ac massa.",
  "Proin aliquet ornare neque, elementum finibus neque eleifend ut. Vivamus venenatis erat diam, a maximus ipsum mollis eget. Fusce eu sem imperdiet, mattis diam quis, porttitor quam. Duis pellentesque ut libero ac accumsan. Sed laoreet sed libero nec vulputate. Phasellus commodo, odio quis ultricies lacinia, lacus metus auctor metus, ut sollicitudin libero odio id lorem. Nam nisl enim, finibus id libero at, convallis sagittis turpis.",
  "Fusce tincidunt lacus id ligula porttitor blandit. In viverra at ante quis convallis. Cras sit amet elementum sem. Nunc velit sapien, vulputate imperdiet mi rutrum, suscipit dignissim odio. Praesent venenatis non leo ut scelerisque. Nunc nec mollis lorem. Integer sed auctor odio. Aenean ex justo, tincidunt blandit leo vitae, iaculis aliquam enim.",
  "Mauris eget euismod ipsum. Sed venenatis, tortor id suscipit tempus, enim nisi dapibus nulla, ac mattis arcu nisi a ante. Nulla tincidunt sapien id enim vestibulum imperdiet. Maecenas imperdiet fermentum nisl, in feugiat nulla mollis eget. Aliquam accumsan et diam a luctus. Mauris ut elementum sapien. Donec at enim vitae nibh malesuada fringilla vehicula quis dui. Suspendisse tristique non massa nec suscipit."
];

const cht = document.getElementById("change-text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.getElementById("change-text").innerHTML = texts[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * texts.length);
}
