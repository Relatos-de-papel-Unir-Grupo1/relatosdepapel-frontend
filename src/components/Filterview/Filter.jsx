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
        <div className="surface-panel w-[280px] p-5">
            <p className="section-kicker">Exploración</p>
            <h2 className="mb-5 mt-2 font-serif text-3xl font-semibold text-[var(--color-ink)]">Filtros</h2>

            <div className="space-y-4">
                {filters.map(({ label, defaultOption }) => (
                    <div key={label}>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--color-primary-deep)]">
                            {label}
                        </label>
                        <div className="relative">
                            <select className="select-field w-full appearance-none pr-10 text-sm">
                                <option>{defaultOption}</option>
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                <ChevronDown />
                            </div>
                        </div>
                    </div>
                ))}

                <button className="btn-secondary w-full rounded-2xl py-2.5 text-sm">
                    Limpiar filtros
                </button>
            </div>
        </div>
    );
};

    export default FilterView;