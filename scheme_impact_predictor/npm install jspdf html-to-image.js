/* eslint-disable no-undef */
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

// eslint-disable-next-line no-unused-vars
const exportToPDF = async () => {
  const chartElement = chartRef.current;
  const mapElement = mapRef.current;

  if (!chartElement || !mapElement) {
    console.error('Chart or Map element not found.');
    return;
  }

  try {
    const chartImage = await toPng(chartElement);
    const mapImage = await toPng(mapElement);

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    let yOffset = 10;

    // Add Chart Image
    const chartProps = { width: 180, height: 90 };
    pdf.addImage(chartImage, 'PNG', (pageWidth - chartProps.width) / 2, yOffset, chartProps.width, chartProps.height);
    yOffset += chartProps.height + 10;

    // Add Map Image
    const mapProps = { width: 180, height: 90 };
    pdf.addImage(mapImage, 'PNG', (pageWidth - mapProps.width) / 2, yOffset, mapProps.width, mapProps.height);

    pdf.save('dashboard.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
