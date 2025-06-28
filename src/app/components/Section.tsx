// src/components/Section.tsx
export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="section-box mt-6 max-w-2xl mx-auto">
      <h2 className="title-text ">{title}</h2>
      {children}
    </div>
  );
}
