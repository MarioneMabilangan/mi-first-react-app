import styles from './Articulo.module.css'
const React = require("react");

const Paragraph = () => {
    return (
        <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id orci lectus. Ut mattis lacinia urna, at tincidunt lectus porttitor a. Praesent varius, tellus nec laoreet egestas, ex risus aliquet dolor, sit amet aliquam eros eros malesuada lorem. Nullam justo felis, mattis eu vehicula nec, vestibulum a nibh. Vivamus ac nulla gravida, gravida enim id, luctus neque. Cras quis luctus nisl. Duis viverra tellus augue, ut ornare ligula imperdiet eu. Suspendisse eu orci at quam tincidunt fermentum ac in ex. Nullam maximus volutpat augue consectetur rhoncus. Vivamus mauris ipsum, congue iaculis pretium at, suscipit at augue.
        </p>
    );
};

export default Paragraph;