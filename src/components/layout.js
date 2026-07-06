export function createLayout() {
  return `
    <main class="max-w-7xl mx-auto px-6">

        <section id="search-section"></section>

        <section
            id="weather-section"
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

        </section>

        <section
            id="forecast-section"
            class="mt-8">

        </section>

    </main>
  `;
}
