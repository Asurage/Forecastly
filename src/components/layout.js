export function createLayout() {
  return `
    <main class="max-w-7xl mx-auto px-6">

        <section id="search-section"></section>
        
        <section
            id="loading-section"
            class="mx-auto mt-4 max-w-6xl">
        </section>

        <section
            id="error-section"
            class="mx-auto mt-4 max-w-6xl">
        </section>

        <section
            id="weather-section"
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

        </section>

        <section
            id="forecast-section"
            class="mt-8">

        </section>

        <section
            id="weather-section"
            class="mx-auto mt-10 flex max-w-6xl flex-col gap-6 lg:flex-row">

        </section>

        <section
            id="forecast-section"
            class="mx-auto mt-10 max-w-6xl">
            
        </section>

    </main>
  `;
}
