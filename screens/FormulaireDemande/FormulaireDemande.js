import FormulaireDemandeStyles from "./FormulaireDemandeStyles";
import AppStyles from "../../AppStyles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { launchCameraAsync } from "expo-image-picker";

import { Input, Button, CheckBox, Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";
import { Controller, useForm } from "react-hook-form";

export default () => {
  const styles = { ...AppStyles(), ...FormulaireDemandeStyles() };

  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [severity, setSeverity] = useState("faible");
  const [asap, setAsap] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (pickedDate) => {
    setDate(pickedDate);
    hideDatePicker();
  };
  [photo, setPhoto] = useState(null);

  const onClicPhoto = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.granted === false) {
      return;
    }

    const result = await launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const { assets } = result;
      if (assets && assets.length > 0) {
        setPhoto(assets[0].uri);
      }
    }
  };

  return (
    <View style={[styles.container, { padding: 5 }]}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            label="Titre"
            errorStyle={{ color: "red" }}
            errorMessage={errors.title ? "Ce champ est requis." : ""}
          />
        )}
        name="title"
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            label="Description"
            multiline
            errorStyle={{ color: "red" }}
            errorMessage={errors.description ? "Ce champ est requis." : ""}
          />
        )}
        name="description"
        rules={{ required: true }}
        defaultValue=""
      />

      <Text style={styles.label}>Sévérité</Text>
      <Picker
        selectedValue={severity}
        onValueChange={(itemValue) => setSeverity(itemValue)}
      >
        <Picker.Item label="Faible" value="faible" />
        <Picker.Item label="Moyenne" value="moyenne" />
        <Picker.Item label="Importante" value="importante" />
      </Picker>

      <Text style={styles.label}>A.S.A.P</Text>
      <CheckBox title="" checked={asap} onPress={() => setAsap(!asap)} />

      <Text style={styles.label}>Date de début du problème</Text>
      <View style={styles.datePicker}>
        <Text style={{ marginRight: 10 }}>{date.toLocaleDateString()}</Text>
        <Icon name="calendar" type="font-awesome" onPress={showDatePicker} />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Button title="Envoyer" />

      <TouchableOpacity onPress={onClicPhoto}>
        <Ionicons name="camera" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
