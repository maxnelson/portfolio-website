import {
  StyleSheet,
  PDFViewer,
  Document,
  Font,
  Page,
  View,
  Text,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const ResumeItem = (props) => {
  console.log(props);
  return (
    <View style={styles.section_padding}>
      <View style={styles.job_header_container}>
        <View style={styles.job_header_info_container}>
          <Text style={styles.month_duration}>
            {props.monthDuration.toUpperCase()}
          </Text>
          <Text>{props.yearDuration}</Text>
        </View>
        <View style={styles.job_header_info_container}>
          <Text style={styles.client_name}>
            {props.client_name_detail.toUpperCase()}
          </Text>
          <Text style={styles.job_title}>{props.jobTitle.toUpperCase()}</Text>
        </View>
      </View>
      <View style={styles.job_description_container}>
        <Text style={styles.body_copy}>{props.description1}</Text>
        <Text style={styles.body_copy}>{props.description2}</Text>
        <Text style={styles.body_copy}>{props.description3}</Text>
        <Text style={styles.body_copy}>{props.description4}</Text>
        {props.technologies_used && (
          <Text style={styles.body_copy}>
            Technologies Used: {props.technologies_used}
          </Text>
        )}
      </View>
    </View>
  );
};
