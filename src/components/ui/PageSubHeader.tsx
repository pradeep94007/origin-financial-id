type PageHeaderProps = {
  subheader: string;
};

export default function PageSubHeader({ subheader }: PageHeaderProps) {
  return <p className="mt-1 text-[15px]">{subheader}</p>;
}
