const filters = [
    { label: "Precio", defaultOption: "Todos los precios" },
    { label: "Popularidad", defaultOption: "Todas" },
    { label: "Fecha de lanzamiento", defaultOption: "Todas las fechas" },
];

const ChevronDown = () => (
    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
    </svg>
);

const FilterView = () => {
    return (
        <div className="w-[280px] rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-slate-800">Filtros</h2>

            <div className="space-y-4">
                {filters.map(({ label, defaultOption }) => (
                    <div key={label}>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                            {label}
                        </label>
                        <div className="relative">
                            <select className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100">
                                <option>{defaultOption}</option>
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                <ChevronDown />
                            </div>
                        </div>
                    </div>
                ))}

                <button className="w-full rounded-lg py-2.5 text-sm font-medium text-slate-400 transition hover:bg-gray-50 hover:text-slate-600">
                    Limpiar filtros
                </button>
            </div>
        </div>
    );
};