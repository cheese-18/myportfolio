import { jsPDF } from 'jspdf'
import { portfolioData } from '../data/portfolio'

export const generateResumePDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })

  const primaryColor = [34, 110, 48]
  const darkTextColor = [33, 37, 41]
  const grayColor = [100, 100, 100]

  // Header Banner
  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, 210, 28, 'F')

  // Name & Title
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.text('REAN COOPERA (Cheese)', 14, 13)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9.5)
  doc.text(portfolioData.title, 14, 21)

  // Contact Information Bar
  doc.setTextColor(...darkTextColor)
  doc.setFontSize(9)
  let y = 35
  const contactText = `Email: ${portfolioData.email}  |  Location: ${portfolioData.location}  |  GitHub: ${portfolioData.socials.github}`
  doc.text(contactText, 14, y)

  // Horizontal divider
  y += 4
  doc.setDrawColor(200, 200, 200)
  doc.setLineWidth(0.5)
  doc.line(14, y, 196, y)

  // Profile / Summary
  y += 7
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(...primaryColor)
  doc.text('ABOUT & SUMMARY', 14, y)

  y += 5
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...darkTextColor)
  const bioLines = doc.splitTextToSize(portfolioData.bio, 182)
  doc.text(bioLines, 14, y)
  y += bioLines.length * 4.5 + 3

  // Skills Section
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(...primaryColor)
  doc.text('SKILLS & TECHNOLOGIES', 14, y)

  y += 5
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...darkTextColor)
  const skillsText = portfolioData.skills.join('  •  ')
  const skillLines = doc.splitTextToSize(skillsText, 182)
  doc.text(skillLines, 14, y)
  y += skillLines.length * 4.5 + 3

  // Experience Section
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(...primaryColor)
  doc.text('EXPERIENCE', 14, y)
  y += 5.5

  portfolioData.experience.forEach(exp => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9.5)
    doc.setTextColor(...darkTextColor)
    doc.text(exp.role, 14, y)

    doc.setFont('helvetica', 'italic')
    doc.setFontSize(8.5)
    doc.setTextColor(...grayColor)
    doc.text(`${exp.company}  |  ${exp.period}`, 196, y, { align: 'right' })

    y += 4
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    doc.setTextColor(...darkTextColor)
    const descLines = doc.splitTextToSize(exp.description, 182)
    doc.text(descLines, 14, y)
    y += descLines.length * 4 + 3
  })

  // Projects Section
  y += 1
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(...primaryColor)
  doc.text('FEATURED PROJECTS', 14, y)
  y += 5.5

  portfolioData.projects.forEach(proj => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9.5)
    doc.setTextColor(...darkTextColor)
    doc.text(proj.title, 14, y)

    doc.setFont('helvetica', 'italic')
    doc.setFontSize(8.5)
    doc.setTextColor(...primaryColor)
    doc.text(`Tech: ${proj.tech.join(', ')}`, 196, y, { align: 'right' })

    y += 4
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    doc.setTextColor(...darkTextColor)
    const projDesc = doc.splitTextToSize(proj.description, 182)
    doc.text(projDesc, 14, y)
    y += projDesc.length * 4

    if (proj.githubUrl) {
      doc.setFontSize(8)
      doc.setTextColor(37, 99, 235)
      doc.textWithLink(`Repo: ${proj.githubUrl}`, 14, y, { url: proj.githubUrl })
      y += 4
    }
    y += 2
  })

  // Footer note
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(8)
  doc.setTextColor(150, 150, 150)
  doc.text('Generated from Rean Coopera (Cheese) Minecraft Developer Portfolio', 105, 290, { align: 'center' })

  // Trigger download
  doc.save('Rean_Coopera_Resume.pdf')
}
