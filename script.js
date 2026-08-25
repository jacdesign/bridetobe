const shareButton = document.querySelector(".share-button");

shareButton?.addEventListener("click", async () => {
  const shareData = {
    title: "Bride-to-Be Party",
    text: "Join us for Jac's bride-to-be party.",
    url: window.location.href,
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(window.location.href);
  const originalText = shareButton.textContent;
  shareButton.textContent = "Link Copied";
  window.setTimeout(() => {
    shareButton.textContent = originalText;
  }, 1800);
});
