const items = [
    {
    Title: "2d movement #1",
    Image: "./assets/img/2d_movement.png",
    JoinPlaceURL: "roblox://placeId=139789331345149",
    PlaceURL: "https://www.roblox.com/games/139789331345149/2d-movement"
  },
    {
    Title: "2d movement #2",
    Image: "./assets/img/2d_movement_2.png",
    JoinPlaceURL: "roblox://placeId=83385789482386",
    PlaceURL: "https://www.roblox.com/games/83385789482386/2d-movement-2"
  },
    {
    Title: "Jumpy",
    Image: "./assets/img/jumpy.png",
    JoinPlaceURL: "roblox://placeId=86079480945504",
    PlaceURL: "https://www.roblox.com/games/86079480945504/jumpy"
  },
    {
    Title: "Lockpick game",
    Image: "./assets/img/lockpick.png",
    JoinPlaceURL: "roblox://placeId=86419997618561",
    PlaceURL: "https://www.roblox.com/games/86419997618561/lockpick-game"
  },
];

function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-title">
      <a href="${item.PlaceURL}" target="_blank" class="card-link">${item.Title}</a>
    </div>    <img src="${item.Image}" alt="${item.title}" />
    <button onclick="window.location.href='${item.JoinPlaceURL}'">
      ▶
    </button>
  `;
  return card;
}

function renderList(data) {
  const container = document.getElementById("grid-list");
  container.innerHTML = "";
  data.forEach(item => {
    const card = createCard(item);
    container.appendChild(card);
  });
}; renderList(items);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.getElementById("site-icon").href = "./assets/uwu.png";
    document.title = "UwU"
  } else {
    document.getElementById("site-icon").href = "./assets/ok.png";
    document.title = "DEMKA TECHNICZNE"
  }
});