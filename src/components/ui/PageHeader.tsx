
type PageHeaderProps = {
  header: string;
};

export default function PageHeader({ header }: PageHeaderProps) {
  return <h1 className="text-xl font-bold">{header}</h1>;
}
