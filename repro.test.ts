async function innerHelper() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1);
  throw new Error("test failed");
}

async function helper() {
  await innerHelper();
}















it("testRepro", async () => {
  await helper();
});
