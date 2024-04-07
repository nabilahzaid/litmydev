import React from "react";

import {
  AspectRatio,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onProjectModal: () => void;
  youtube_link: string;
  title: string;
};

function ProjectModal({ isOpen, onProjectModal, youtube_link, title }: Props) {
  return (
    <Modal
      size="xl"
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onProjectModal}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody className="my-10">
          <AspectRatio maxW="560px" ratio={16 / 9}>
            <iframe title={title} src={youtube_link} allowFullScreen />
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default ProjectModal;
