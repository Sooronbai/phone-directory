import { useState } from "react";

const LABELS = {
  name: "ФИО",
  mobile: "Мобильный телефон",
  work: "Рабочий телефон",
  department: "Отдел",
  position: "Должность",
};

const PhoneForm = ({ addContact }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    work: "",
    department: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.mobile && form.department) {
      addContact(form);
      setForm({ name: "", mobile: "", work: "", department: "", position: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Object.keys(form).map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700">
              {LABELS[field]}
            </label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
              required={
                field === "name" || field === "mobile" || field === "department"
              }
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Добавить
      </button>
    </form>
  );
};

export default PhoneForm;
