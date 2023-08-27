document.addEventListener("DOMContentLoaded", function(){
    fetch("./data.json")
        .then(response => response.json())
        .then(data => generateSummary(data))
        .catch(error => console.error("Error fetching data:", error));
});

function generateSummary(data) {
    const summaryContent = document.querySelector(".summary-content");
  
    data.forEach(item => {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("summary-content-category");
      categoryDiv.style.backgroundColor = item.backgroundColor;
  
      const categoryContent = document.createElement("div");
      categoryContent.classList.add("summary-content-category-content");
  
      const categoryIcon = document.createElement("img");
      categoryIcon.src = item.icon;
      categoryIcon.alt = item.category;
  
      const categoryText = document.createElement("p");
      categoryText.classList.add("summary-content-text");
      categoryText.textContent = item.category;
      categoryText.style.color = item.textColor;
  
      const scoreText = document.createElement("p");
      const scoreSpan = document.createElement("span");
      scoreSpan.textContent = item.score;
      scoreSpan.style.color = "black"; // Adjust the color as needed
      scoreText.style.color = "grey";
      scoreText.appendChild(scoreSpan);
      scoreText.innerHTML += " / 100";
  
      categoryContent.appendChild(categoryIcon);
      categoryContent.appendChild(categoryText);
  
      categoryDiv.appendChild(categoryContent);
      categoryDiv.appendChild(scoreText);
  
      summaryContent.appendChild(categoryDiv);
    });
}
  