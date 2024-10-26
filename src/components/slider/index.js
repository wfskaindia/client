import styles from "./style.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <section id={styles.slider}>
      <input type="radio" name="slider" id={styles.s1} defaultChecked />
      <input type="radio" name="slider" id={styles.s2} />
      <input type="radio" name="slider" id={styles.s3} />
      <input type="radio" name="slider" id={styles.s4} />
      <input type="radio" name="slider" id={styles.s5} />
      <label htmlFor={styles.s1} id={styles.slide1}>
        <Image width={100} height={100} src="/images/gallery/6.jpeg" alt="" />
      </label>
      <label htmlFor={styles.s2} id={styles.slide2}>
        <Image width={100} height={100} src="/images/gallery/7.jpeg" alt="" />
      </label>
      <label htmlFor={styles.s3} id={styles.slide3}>
        <Image width={100} height={100} src="/images/gallery/8.jpeg" alt="" />
      </label>
      <label htmlFor={styles.s4} id={styles.slide4}>
        <Image width={100} height={100} src="/images/gallery/9.jpeg" alt="" />
      </label>{" "}
      <label htmlFor={styles.s5} id={styles.slide5}>
        <Image width={100} height={100} src="/images/gallery/10.jpeg" alt="" />
      </label>{" "}
      <label htmlFor={styles.s5} id={styles.slide5}>
        <Image width={100} height={100} src="/images/gallery/11.jpeg" alt="" />
      </label>{" "}
      <label htmlFor={styles.s1} id={styles.slide1}>
        <Image width={100} height={100} src="/images/gallery/12.jpeg" alt="" />
      </label>{" "}
      <label htmlFor={styles.s2} id={styles.slide2}>
        <Image width={100} height={100} src="/images/gallery/13.jpeg" alt="" />
      </label>{" "}
      <label htmlFor={styles.s3} id={styles.slide3}>
        <Image width={100} height={100} src="/images/gallery/14.jpeg" alt="" />
      </label>{" "}
      <label htmlFor={styles.s4} id={styles.slide4}>
        <Image width={100} height={100} src="/images/gallery/15.jpeg" alt="" />
      </label>{" "}
      <label htmlFor={styles.s5} id={styles.slide5}>
        <Image width={100} height={100} src="/images/gallery/16.jpeg" alt="" />
      </label>{" "}
      <label htmlFor={styles.s1} id={styles.slide1}>
        <Image width={100} height={100} src="/images/gallery/17.jpeg" alt="" />
      </label>{" "}
      <label htmlFor={styles.s2} id={styles.slide2}>
        <Image width={100} height={100} src="/images/gallery/18.jpeg" alt="" />
      </label>
    </section>
  );
}
