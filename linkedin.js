function removeAds() {
    let spans = document.getElementsByTagName("span");

    for (let i = 0; i < spans.length; ++i) {
        if (spans[i].textContent.trim().includes("Promoted")) {
            let card = spans[i].closest(".feed-shared-update-v2");

            // Fallback: climb 6 levels if needed
            if (!card) {
                let j = 0;
                card = spans[i];
                while (j < 6 && card.parentNode) {
                    card = card.parentNode;
                    ++j;
                }
            }

            // Hide the ad if we found the container
            if (card) {
                card.style.display = "none";
            }
        }
    }
}

removeAds();
setInterval(removeAds, 100);
