data = [
  {
    image: "image-daniel.jpg",
    name:'Daniel Clifford',
    status: 'Verified Graduate',
    excerpt: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    review: "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.”",
    itemBgCSSClass: 'item--violet',
  },
  {
    image: "image-jonathan.jpg",
    name:'Jonathan Walters',
    status: 'Verified Graduate',
    excerpt: "The team was very supportive and kept me motivated",
    review: "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
    itemBgCSSClass: 'item--grayish-blue',
  },
  {
    image: "image-jeanette.jpg",
    name:'Jeanette Harmon',
    status: 'Verified Graduate',
    excerpt: "An overall wonderful and rewarding experience",
    review: "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
    itemBgCSSClass: 'item--white',
  },
  {
    image: "image-patrick.jpg",
    name:'Patrick Abrams',
    status: 'Verified Graduate',
    excerpt: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    review: "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
    itemBgCSSClass: 'item--blackish-blue',
  },
  {
    image: "image-kira.jpg",
    name:'Kira Whittle',
    status: 'Verified Graduate',
    excerpt: "Such a life-changing experience. Highly recommended!",
    review: "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
    itemBgCSSClass: 'item--white',
  }

];

function returnHTMLTemplate({
  image,
  name,
  status,
  excerpt,
  review,
  itemBgCSSClass,
}, index) {
  console.log(index)
  return `
    <section class="item ${itemBgCSSClass} item${index+1}">

      <h1 class="item-title">
        ${excerpt}
      </h1> 
      <div class="item-user-details">
        <img class="item-user-details__image" src="images/${image}" alt="Daniel Clifford">
        <div class="item-user-details__flex">
          <p class="item-user-details__name">
            ${name}
          </p>
          <p class="item-user-details__status">
            ${status}
          </p>
        </div>
      </div>
      <p class="item-comments">
        ${review}
      </p>
    </section>
  `;
}

const main = document.querySelector('main');
data.forEach((element, index) => {
  console.log(index)
  main.innerHTML += returnHTMLTemplate(element, index);
});
