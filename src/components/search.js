export function createSearch() {
  return `
    <div class="w-full max-w-3xl mx-auto">
      <div class="flex flex-col gap-3 md:flex-row">
        
        <input
          id="city-input"
          type="text"
          placeholder="Search for a city..."
          class="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 backdrop-blur-md outline-none transition focus:border-white/50"
        />

        <button
          id="search-btn"
          class="rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
        >
          Search
        </button>

        <button
          id="location-btn"
         class="rounded-xl border border-gray-300 bg-white px-5 py-3 text-slate-800 transition hover:bg-gray-100"   
        >
          📍 My Location
        </button>

      </div>
    </div>
  `;
}
