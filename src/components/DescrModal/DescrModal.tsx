import { IconButton, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { Icon20QuestionMark } from "@telegram-apps/telegram-ui/dist/icons/20/question_mark";

const DescrModal = () => {
  return (
    <Modal
      trigger={
        <IconButton size="s">
          <Icon20QuestionMark />
        </IconButton>
      }
    >
      <Placeholder description="Description" header="Title"></Placeholder>
    </Modal>
  );
};

export default DescrModal;
