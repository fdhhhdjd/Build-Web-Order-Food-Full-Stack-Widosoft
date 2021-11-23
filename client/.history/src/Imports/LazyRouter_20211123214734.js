export const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Pages/Home")), 2000);
  });
});
