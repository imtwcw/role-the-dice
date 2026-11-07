document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 首页热门
  const featuredEl = document.getElementById("featured-scripts");
  if (featuredEl && typeof SCRIPTS !== "undefined") {
    featuredEl.innerHTML = SCRIPTS.filter(s => s.featured)
      .map(cardHTML).join("");
  }

  // 剧本列表 + 筛选
  const listEl = document.getElementById("script-list");
  if (listEl && typeof SCRIPTS !== "undefined") {
    const typeFilter = document.getElementById("filter-type");
    const cityFilter = document.getElementById("filter-city");

    const render = () => {
      const type = typeFilter ? typeFilter.value : "";
      const onlyCity = cityFilter ? cityFilter.checked : false;
      const list = SCRIPTS.filter(s =>
        (!type || s.type === type) && (!onlyCity || s.cityLimited)
      );
      listEl.innerHTML = list.length ? list.map(cardHTML).join("") : "<p>暂无剧本</p>";
    };

    if (typeFilter) typeFilter.addEventListener("change", render);
    if (cityFilter) cityFilter.addEventListener("change", render);
    render();
  }
});

function cardHTML(s) {
  return `
    <article class="card">
      <div class="card-cover" style="background-image:url('${s.cover}')"></div>
      <div class="card-body">
        <h3>${s.title} ${s.cityLimited ? '<span class="tag">城限</span>' : ""}</h3>
        <p class="meta">${s.type} · ${s.players} · ${s.duration} · ${s.difficulty}</p>
        <p>${s.description}</p>
        <a class="btn btn-outline btn-sm" href="booking.html?script=${encodeURIComponent(s.title)}">预约此本</a>
      </div>
    </article>
  `;
}