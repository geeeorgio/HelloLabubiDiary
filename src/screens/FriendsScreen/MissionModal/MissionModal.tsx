import { Modal, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';

interface MissionModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  mission: string;
}

const MissionModal = ({
  isVisible,
  onClose,
  onConfirm,
  mission,
}: MissionModalProps) => {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      transparent
      animationType="fade"
      statusBarTranslucent
      style={styles.modal}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={styles.wrapper}
      >
        <View style={styles.modalContainer}>
          <CustomContainer colorVariant="darkGreen" style={styles.modalContent}>
            <CustomText style={styles.modalTitle}>{mission}</CustomText>

            <View style={styles.divider} />

            <CustomButton
              variant="darkGreen"
              style={styles.modalButton}
              onPress={onConfirm}
            >
              <CustomText style={styles.modalButtonText}>Done!</CustomText>
            </CustomButton>

            <View style={styles.divider} />

            <CustomButton
              variant="darkGreen"
              style={styles.modalButton}
              onPress={onConfirm}
            >
              <CustomText style={styles.modalButtonText}>Cancel</CustomText>
            </CustomButton>
          </CustomContainer>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MissionModal;
