import { Modal, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { COLORS } from 'src/constants';

interface MissionModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  mission: string;
  type?: 'mission' | 'quiz';
}

const MissionModal = ({
  isVisible,
  onClose,
  onConfirm,
  mission,
  type = 'mission',
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
              <CustomText
                style={[
                  styles.modalButtonText,
                  type === 'quiz' && { color: COLORS.red },
                ]}
              >
                {type === 'mission' ? 'Done!' : 'Leave'}
              </CustomText>
            </CustomButton>

            <View style={styles.divider} />

            <CustomButton
              variant="darkGreen"
              style={styles.modalButton}
              onPress={onClose}
            >
              <CustomText style={styles.modalButtonText}>
                {type === 'mission' ? 'Cancel' : 'Back to quiz'}
              </CustomText>
            </CustomButton>
          </CustomContainer>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MissionModal;
