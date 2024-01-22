const useAppInit = () => {
  const select = (el: any, all: boolean = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type: string, el: string, listener: any, all = false) => {
    let selectEl: any = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e: any) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el: any, listener: any) => {
    el.addEventListener("scroll", listener);
  };

  const scrollto = (el: any) => {
    let header: any = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  return {
    select,
    on,
    onscroll,
    scrollto,
  };
};

export default useAppInit;
