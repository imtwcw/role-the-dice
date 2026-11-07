document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  const select = document.getElementById("script-select");
  if (!form) return;

  // 填充剧本下拉
  if (select && typeof SCRIPTS !== "undefined") {
    select.innerHTML = `<option value="">请选择</option>` +
      SCRIPTS.map(s => `<option value="${s.title}">${s.title}</option>`).join("");
    // 从 URL 预选
    const params = new URLSearchParams(location.search);
    const pre = params.get("script");
    if (pre) select.value = pre;
  }

  // 日期最小值 = 今天 + 2 天
  const dateInput = form.querySelector('input[name="date"]');
  if (dateInput) {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    dateInput.min = d.toISOString().split("T")[0];
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    // 后期扩展：提交到 Supabase / API
    // await fetch("/api/bookings", { method:"POST", body: JSON.stringify(data) });

    const msg =
      `你好 Role The Dice，我想预约：%0A` +
      `姓名：${data.name}%0A` +
      `电话：${data.phone}%0A` +
      `日期：${data.date}%0A` +
      `时段：${data.time}%0A` +
      `人数：${data.players}%0A` +
      `剧本：${data.script || "未定"}%0A` +
      `备注：${data.note || "无"}`;

    window.open(`https://wa.me/60168607741?text=${msg}`, "_blank");
  });
});