type HrefI = "" | "notice" | "faq" | "service" | "makers" | "terms" | "privacy";

type MenuI = { page: string; link: HrefI };
type MenuListI = readonly (
  | MenuI
  | {
      page: string;
      detail: readonly MenuI[];
    }
)[];

const MenuList: MenuListI = [
  { page: "공지사항", link: "notice" },
  { page: "자주 묻는 질문", link: "faq" },
  {
    page: "서비스 정보",
    detail: [
      { page: "브랜딩 리소스", link: "" },
      { page: "서비스 소개", link: "service" },
      { page: "만든 사람들", link: "makers" },
    ],
  },
  {
    page: "약관 및 정책",
    detail: [
      { page: "이용 약관", link: "terms" },
      { page: "개인정보 정책", link: "privacy" },
    ],
  },
  { page: "블로그", link: "" },
] as const;

export default MenuList;
