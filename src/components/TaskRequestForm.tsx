import React, { useState } from "react";

const TaskRequestForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    task: "",
    module: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `New Task Request - ${form.module}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0ATask: ${form.task}%0D%0AModule: ${form.module}`;
    
    window.location.href = `mailto:your@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-2xl mx-auto px-6 shadow-lg rounded-2xl p-8 ">
        <h2 className="text-2xl font-bold text-center mb-6">Request a Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Module */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Module</label>
            <select
              name="module"
              value={form.module}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select a module</option>
              <option value="Subscriptions">Subscriptions</option>
              <option value="Store Design">Store Design</option>
              <option value="Integrations">Integrations</option>
              <option value="Custom">Custom</option>
            </select>
          </div>

          {/* Task */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Task</label>
            <textarea
              name="task"
              value={form.task}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskRequestForm;
