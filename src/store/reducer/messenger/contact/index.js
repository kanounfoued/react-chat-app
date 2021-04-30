import {
  MESSENGER_CONTACT_IS_LOADING,
  FETCH_MESSENGER_CONTACT_LIST,
  MESSENGER_CONTACT_ERROR,
  REMOVE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
} from "../../../type";

const messengerContactInitialState = {
  contacts: [],
  isLoading: false,
  error: "",
};

const MessengerContactReducer = (
  state = messengerContactInitialState,
  action
) => {
  if (action.type === MESSENGER_CONTACT_IS_LOADING) {
    return {
      ...state,
      isLoading: true,
      error: "",
    };
  }

  switch (action.type) {
    case FETCH_MESSENGER_CONTACT_LIST: {
      const { contacts } = action.payload;

      return {
        ...state,
        contacts,
      };
    }

    case ADD_CONTACT: {
      const { contact } = action.payload;
      const contacts = [contact, ...contacts];

      return {
        ...state,
        contacts,
      };
    }
    case UPDATE_CONTACT: {
      const { id, newContact } = action.payload;
      const contacts = state.contacts.map((contact) => {
        return contact.id === id ? newContact : contact;
      });

      return {
        ...state,
        contacts,
      };
    }
    case REMOVE_CONTACT: {
      const { id } = action.payload;
      const contacts = state.contacts.filter((contact) => {
        return contact.id !== id;
      });

      return {
        ...state,
        contacts,
      };
    }

    case MESSENGER_CONTACT_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        error: error,
      };

    default:
      return state;
  }
};

export default MessengerContactReducer;
