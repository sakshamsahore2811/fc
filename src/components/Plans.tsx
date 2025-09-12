import React from "react";

const plans = [
  {
    title: "Subscriptions PRO",
    price: "$49",
    features: [
      "Set up subscriptions model",
      "Implement custom widget",
      "Design & implement bundles",
      "Create custom customer portal",
      "Set up growth plan for subscription",
    ],
    button: "Get Started",
  },
  {
    title: "Store Growth",
    price: "$89",
    features: [
      "Everything in Subscriptions PRO plan",
      "Overall store design revamp",
      "Custom app integrations",
      "End-to-end functionality",
    ],
    button: "Get Started",
  },
  {
    title: "Custom Task ?",
    price: "Custom",
    features: ["Discuss a custom pricing with us",
"Custom development tasks",
"Tweaks/revamp for existing stores"
    ],
    button: "Contact Us",
  },
];

const Plans: React.FC = () => {
  return (
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2  className="text-4xl text-center md:text-4xl font-bold mb-4 text-white
              [text-shadow:0_0_10px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8),0_0_60px_rgba(168,85,247,0.6)]"
          >Our Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className=" shadow-lg rounded-2xl bg-gray-800/75 p-6 flex flex-col hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold text-blue-300 mb-4">
                {plan.title=="Subscriptions PRO" && <><s>$100{" "}</s></>}
                {plan.title=="Store Growth" && <><s>$200{" "}</s></>}
                {plan.price}
              </p>
              <ul className="space-y-2 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 text-md"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition">
                <a href="#contact">
                {plan.button}
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
