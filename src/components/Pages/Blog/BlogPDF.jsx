import React from 'react';
import { Page, Text, Image, StyleSheet, Document, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },

    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    qestion: {
        fontWeight: "600px"

    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const BlogPDF = () => {
    return (
        <Document >
            <Page style={styles.body}>
                <Text style={styles.title} fixed>Blog Question</Text>
                <Text style={styles.qestion}>
                    What is the difference between uncontrolled and controlled components? </Text>
                <Text style={styles.text}>
                    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                </Text>
                <Text style={styles.qestion}>
                    How to validate React props using PropTypes?
                </Text>
                <Text style={styles.text}>
                    Import the PropTypes library in your component using import PropTypes from prop-types; Then Define the expected data types for your props using the propTypes object inside your component. Specify the data type for each prop using PropTypes, such as PropTypes.string, PropTypes.number, PropTypes.bool, etc. Must be Assign the propTypes object to your component using the MyComponent.propTypes syntax.
                </Text>

                <Text style={styles.qestion}>
                    What is the difference between nodejs and express js.?
                </Text>
                <Text style={styles.text}>
                    NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.
                </Text>

                <Text style={styles.qestion}>
                    What is a custom hook, and why will you create a custom hook?
                </Text>
                <Text style={styles.text}>
                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
};

export default BlogPDF;