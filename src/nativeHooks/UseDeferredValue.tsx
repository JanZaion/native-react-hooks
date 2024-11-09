import { useState, useDeferredValue } from "react";

const generateProducts = () => {
  return Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Product ${i}`,
    description: `Random stuff: 
    ${Math.floor(Math.random() * 1000000000)}`,
  }));
};

// Creates a lower priority copy of a value
// that updates after the high-priority state changes
// are processed, making it perfect
// for expensive operations like filtering large lists.
// When handling expensive computations triggered
// by frequent updates (like search input),
// it helps keep the UI responsive by deferring the heavy work
// while immediately reflecting user input changes.
export const UseDeferredValue = () => (
  <InUse products={generateProducts()} />
);

export const InUse = ({
  products,
}: {
  products: ReturnType<typeof generateProducts>;
}) => {
  // With deferredValue
  const [deferredSearchTerm, setDeferredSearchTerm] = useState("");
  const deferredValue = useDeferredValue(deferredSearchTerm);

  // Without deferredValue
  const [directSearchTerm, setDirectSearchTerm] = useState("");

  const filteredProductsDeferred = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(deferredValue.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(deferredValue.toLowerCase()),
  );

  const filteredProductsDirect = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(directSearchTerm.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(directSearchTerm.toLowerCase()),
  );

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 1 }}>
        <h2>With useDeferredValue</h2>
        <input
          type="text"
          value={deferredSearchTerm}
          onChange={(e) => setDeferredSearchTerm(e.target.value)}
          placeholder="Search with deferred value..."
          style={{ width: "100%", padding: "8px" }}
        />
        <p>Showing results for: {deferredValue}</p>
        <div style={{ height: "400px", overflow: "auto" }}>
          {filteredProductsDeferred.map((product) => (
            <div
              key={product.id}
              style={{
                padding: "8px",
                borderBottom: "1px solid hotpink",
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h2>Without useDeferredValue</h2>
        <input
          type="text"
          value={directSearchTerm}
          onChange={(e) => setDirectSearchTerm(e.target.value)}
          placeholder="Search directly..."
          style={{ width: "100%", padding: "8px" }}
        />
        <p>Showing results for: {directSearchTerm}</p>
        <div style={{ height: "400px", overflow: "auto" }}>
          {filteredProductsDirect.map((product) => (
            <div
              key={product.id}
              style={{
                padding: "8px",
                borderBottom: "1px solid hotpink",
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
