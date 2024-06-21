document
  .getElementById("kodamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    if (name) {
      const kodam = calculateKodam(name);
      document.getElementById(
        "result"
      ).innerText = `Kodam Anda adalah: ${kodam}`;
      openModal();
    } else {
      document.getElementById("result").innerText = "Harap isi nama Anda.";
    }
  });

function calculateKodam(name) {
  const kodamList = [
    "Sego Berkat",
    "Gajah Baru",
    "Seblak",
    "Celeng",
    "Decul",
    "Fans MU",
    "Ayam Geprek",
  ];
  const nameValue = name.toLowerCase().charCodeAt(0) - 97;
  const kodamIndex = nameValue % kodamList.length;
  return kodamList[kodamIndex];
}

function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
});
