interface SelectProps {
  label: string
  options: string[] | { value: string; label: string }[]
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select({ label, options, value, onChange }: SelectProps) {
  return (
    <div className="mb-4 sm:mb-0">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {options.map((option) => (
          <option
            key={typeof option === "string" ? option : option.value}
            value={typeof option === "string" ? option : option.value}
          >
            {typeof option === "string" ? option : option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

