import Image from "next/image";
import { Button, ListItem, ListItemText, Typography } from "@material-ui/core";

const ProductItem = ({ product }) => {
  const { name, image, price, description } = product;

  return (
    <ListItem
      className="MuiListItem-root ml-0 mb-4 MuiListItem-gutters"
      style={{ flexDirection: "row-reverse", paddingRight: "20px" }}
    >
      <div style={{ position: "relative" }}>
        <Image
          className="image_menu"
          src={image}
          alt="Product Image"
          width={90}
          height={90}
          style={{
            borderRadius: "5px",
            marginRight: "0px",
            marginLeft: "15px",
          }}
        />
      </div>
      <div className="text-left" style={{ marginRight: "20px" }}>
        <Typography
          variant="h6"
          className="text-right layoutProductTitleArabic cut-text-one-line-list"
          style={{
            fontFamily: "Quicksand, Cairo",
            direction: "rtl",
            fontWeight: "bold",
            width: "100%",
            right: "-20px",
            paddingLeft: "3px",
            position: "relative",
            top: "0px",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          className="cut-text layoutProductDescriptionArabic text-right"
          style={{
            position: "relative",
            top: "-5px",
            width: "100%",
            color: "rgb(51, 51, 51)",
            right: "-20px",
            paddingLeft: "3px",
            height: "40px",
          }}
        >
          {description}
        </Typography>
        <div
          className="priceArabic rtl"
          style={{
            color: "rgb(56, 142, 60)",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            height: "35px",
          }}
        >
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            {price} دك
          </Typography>
          <div className="mr-3">
            <div></div>
            <div></div>
            <div className="">
              <Button
                variant="outlined"
                color="primary"
                size="small"
                style={{
                  height: "30px",
                  width: "100%",
                  fontWeight: "bold",
                  border: "1px solid",
                  direction: "ltr",
                  textTransform: "none",
                  fontSize: "14px",
                }}
              >
                <span>أضف</span>
                <span className="MuiButton-endIcon MuiButton-iconSizeSmall">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ListItem>
  );
};

export default ProductItem;
