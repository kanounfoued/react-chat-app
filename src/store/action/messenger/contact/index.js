import {
  FETCH_MESSENGER_CONTACT_LIST,
  MESSENGER_CONTACT_ERROR,
  REMOVE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
} from "../../../type";
import image1 from "../../../../assets/contact/1.jpg";
import image2 from "../../../../assets/contact/2.jpg";
import image3 from "../../../../assets/contact/3.jpg";
import image4 from "../../../../assets/contact/4.jpg";
import image5 from "../../../../assets/contact/5.jpg";
import image6 from "../../../../assets/contact/6.jpg";
import image7 from "../../../../assets/contact/7.jpg";

const mockData = [
  {
    id: "sldfskjfoeirjfier",
    name: "mohamed foued",
    familyName: "kanoun",
    picture: image1,
  },
  {
    id: "sdmlfkeporkf",
    name: "said",
    familyName: "baklioun",
    picture: image2,
  },
  {
    id: "sufnknvxlqs",
    name: "amine",
    familyName: "samrani",
    picture: image3,
  },
  {
    id: "lek,flzr,mzmze",
    name: "khelifi",
    familyName: "mohamed",
    picture: image4,
  },
  {
    id: "sd,qmdsfq,fzef,",
    name: "raouf",
    familyName: "hamdine",
    picture: image5,
  },
  {
    id: "zel,mzlr,zmlr,tzerk,ùslf",
    name: "noufel",
    familyName: "mohamed",
    picture: image6,
  },
  {
    id: "ùfgmfmobkzlenlknlaze",
    name: "mohamed",
    familyName: "kacem",
    picture: image7,
  },
];

export const fetchContactList = () => (dispatch) => {
  try {
    dispatch({
      type: FETCH_MESSENGER_CONTACT_LIST,
      payload: {
        contacts: mockData,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_CONTACT_ERROR,
        payload: { error: error.message },
      });
    }
  }
};

export const addContact = (contact) => (dispatch) => {
  try {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        contact,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_CONTACT_ERROR,
        payload: { error: error.message },
      });
    }
  }
};

export const removeContact = (id) => (dispatch) => {
  try {
    dispatch({
      type: REMOVE_CONTACT,
      payload: {
        id,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_CONTACT_ERROR,
        payload: { error: error.message },
      });
    }
  }
};

export const updateContact = (id, contact) => (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CONTACT,
      payload: {
        id,
        contact,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_CONTACT_ERROR,
        payload: { error: error.message },
      });
    }
  }
};
