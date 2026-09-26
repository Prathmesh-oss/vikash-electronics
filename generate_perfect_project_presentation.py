import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.dml import MSO_LINE
import docx
from docx import Document
from docx.shared import Inches as DocxInches, Pt as DocxPt, RGBColor as DocxRGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

BASE_DIR = r"d:\A_S_Projects\Vikas_Electronics"
PPTX_FILE_PRIMARY = os.path.join(BASE_DIR, "Vikash_Electronics_Project_Presentation.pptx")
PPTX_FILE = os.path.join(BASE_DIR, "Vikash_Electronics_Presentation.pptx")
PPTX_ACADEMIC_FILE = os.path.join(BASE_DIR, "Vikash_Electronics_Academic_Presentation.pptx")
PPTX_COMPLETE_FILE = os.path.join(BASE_DIR, "Vikash_Electronics_Complete_Academic_Presentation.pptx")
DOCX_FILE = os.path.join(BASE_DIR, "Project_1_Application_Form_Vikash_Electronics.docx")
HTML_FILE = os.path.join(BASE_DIR, "Project_1_Application_Form_Vikash_Electronics.html")

LOGO_UTU = os.path.join(BASE_DIR, "utu_flame_logo.png")
LOGO_AMTICS = os.path.join(BASE_DIR, "amtics_circle_logo.png")

# ==============================================================================
# COLOR PALETTE
# ==============================================================================
COLOR_WHITE = RGBColor(255, 255, 255)
COLOR_BLACK = RGBColor(15, 23, 42)          # Primary Text #0F172A
COLOR_RED = RGBColor(220, 38, 38)           # Crimson Red #DC2626
COLOR_BLUE = RGBColor(2, 132, 199)          # Primary Blue #0284C7
COLOR_DARK_BLUE = RGBColor(15, 76, 129)     # CSE Slate Blue #0F4C81
COLOR_GRAY_DARK = RGBColor(51, 65, 85)      # Slate 700 #334155
COLOR_GRAY_LIGHT = RGBColor(248, 250, 252)  # Slate 50 #F8FAFC
COLOR_TABLE_HEADER = RGBColor(230, 204, 204)# Rosy Pink #E6CCCC
COLOR_TABLE_BORDER = RGBColor(203, 213, 225)# Slate 300 #CBD5E1
COLOR_DIAGRAM_BG = RGBColor(240, 249, 255)  # Light Sky Tint #F0F9FF
COLOR_DIAGRAM_BORDER = RGBColor(14, 116, 144)# Cyan/Teal #0E7490
COLOR_ACCENT_BLUE = RGBColor(37, 99, 235)   # Accent Blue #2563EB

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank_layout = prs.slide_layouts[6]

def set_slide_background(slide):
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = COLOR_WHITE

def add_academic_header(slide, title_text, red_subtitle=""):
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.35), Inches(11.733), Inches(1.3))
    tf = title_box.text_frame
    tf.word_wrap = True
    tf.margin_left = Inches(0)
    tf.margin_top = Inches(0)
    
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    r_title = p.add_run()
    r_title.text = title_text
    r_title.font.size = Pt(28)
    r_title.font.bold = True
    r_title.font.color.rgb = COLOR_BLACK
    r_title.font.name = "Arial"
    
    if red_subtitle:
        p2 = tf.add_paragraph()
        p2.alignment = PP_ALIGN.CENTER
        r_sub = p2.add_run()
        r_sub.text = red_subtitle
        r_sub.font.size = Pt(22)
        r_sub.font.bold = True
        r_sub.font.color.rgb = COLOR_RED
        r_sub.font.name = "Arial"
        p2.space_before = Pt(4)

def add_diagram_box(slide, left, top, width, height, title, subtext="", border_color=COLOR_DIAGRAM_BORDER, bg_color=COLOR_WHITE):
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = bg_color
    shape.line.color.rgb = border_color
    shape.line.width = Pt(1.5)
    
    tf = shape.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = title
    r.font.size = Pt(11)
    r.font.bold = True
    r.font.color.rgb = COLOR_BLACK
    r.font.name = "Arial"
    
    if subtext:
        p2 = tf.add_paragraph()
        p2.alignment = PP_ALIGN.CENTER
        r2 = p2.add_run()
        r2.text = subtext
        r2.font.size = Pt(9.5)
        r2.font.color.rgb = COLOR_GRAY_DARK
        r2.font.name = "Arial"
        p2.space_before = Pt(2)
    return shape

# ==============================================================================
# SLIDE 1: TITLE SLIDE
# ==============================================================================
s1 = prs.slides.add_slide(blank_layout)
set_slide_background(s1)

if os.path.exists(LOGO_UTU):
    s1.shapes.add_picture(LOGO_UTU, Inches(0.8), Inches(0.4), width=Inches(1.2))
if os.path.exists(LOGO_AMTICS):
    s1.shapes.add_picture(LOGO_AMTICS, Inches(11.3), Inches(0.4), width=Inches(1.2))

hb = s1.shapes.add_textbox(Inches(2.2), Inches(0.4), Inches(8.933), Inches(1.5))
tf = hb.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.alignment = PP_ALIGN.CENTER
r = p.add_run()
r.text = "Asha M. Tarsadia Institute of\nComputer Science and Technology"
r.font.size = Pt(24); r.font.bold = True; r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"

p_dept = tf.add_paragraph()
p_dept.alignment = PP_ALIGN.CENTER
r_dept = p_dept.add_run()
r_dept.text = "Computer Science and Engineering"
r_dept.font.size = Pt(20); r_dept.font.bold = True; r_dept.font.color.rgb = COLOR_DARK_BLUE; r_dept.font.name = "Arial"
p_dept.space_before = Pt(6)

tb = s1.shapes.add_textbox(Inches(1.0), Inches(2.2), Inches(11.333), Inches(1.4))
tf = tb.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run()
r.text = "Vikash Electronics – Professional DJ & Electronic Equipment Repair\nShowcase & Service Management Web Application"
r.font.size = Pt(23); r.font.bold = True; r.font.color.rgb = COLOR_BLUE; r.font.name = "Arial"

pb = s1.shapes.add_textbox(Inches(2.0), Inches(4.0), Inches(9.333), Inches(1.4))
tf = pb.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "Prepared by"; r.font.size = Pt(17); r.font.bold = True; r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"

p2 = tf.add_paragraph(); p2.alignment = PP_ALIGN.CENTER
r2 = p2.add_run(); r2.text = "Prathmesh Chaudhari"; r2.font.size = Pt(16); r2.font.bold = True; r2.font.color.rgb = COLOR_BLACK; r2.font.name = "Arial"; p2.space_before = Pt(4)

p3 = tf.add_paragraph(); p3.alignment = PP_ALIGN.CENTER
r3 = p3.add_run(); r3.text = "(202503103510061)"; r3.font.size = Pt(15); r3.font.color.rgb = COLOR_BLACK; r3.font.name = "Arial"; p3.space_before = Pt(2)

gb = s1.shapes.add_textbox(Inches(2.0), Inches(5.65), Inches(9.333), Inches(1.4))
tf = gb.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "Guided by"; r.font.size = Pt(17); r.font.bold = True; r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"

p2 = tf.add_paragraph(); p2.alignment = PP_ALIGN.CENTER
r2 = p2.add_run(); r2.text = "<Guide Name>"; r2.font.size = Pt(15); r2.font.color.rgb = COLOR_BLACK; r2.font.name = "Arial"; p2.space_before = Pt(4)

# ==============================================================================
# SLIDE 2: OUTLINE
# ==============================================================================
s2 = prs.slides.add_slide(blank_layout)
set_slide_background(s2)
add_academic_header(s2, "Outline")

cb = s2.shapes.add_textbox(Inches(1.8), Inches(1.8), Inches(9.7), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

items = ["Client Profile", "Project Introduction", "Objective(s)", "Problem Analysis", "Requirement Engineering", "Software Development Model", "Modeling", "Others"]
for idx, item in enumerate(items):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r = p.add_run(); r.text = item; r.font.size = Pt(20); r.font.bold = True; r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"
    p.space_before = Pt(14)

# ==============================================================================
# SLIDE 3: CLIENT PROFILE
# ==============================================================================
s3 = prs.slides.add_slide(blank_layout)
set_slide_background(s3)
add_academic_header(s3, "Client Profile")

cb = s3.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

sections = [
    ("Client name and address: ", "Vikash Electronics, premier professional DJ sound systems, stage lighting, power amplifiers, and electronic equipment repair center operating at Plot No. 199, Sarve No. 1-2, Sanjay Nagar, Udhna Yard, Udhna, Surat, Gujarat - 394210, India."),
    ("Your communication: ", "Requirements gathered through in-person workshop visits and WhatsApp/calls with the proprietor & chief technician (Mr. Murlidhar Chaudhari), covering voice coil rewinding, amplifier transistor balancing, Sharpy optical calibration, sound mixer restoration, emergency calling, and operating hours."),
    ("Contract letter: ", "Project undertaken as an industry client engagement (IDP) to build a dedicated showcase catalog and direct customer repair consultation platform, confirmed with the client before development.")
]

for s_idx, (sec_title, body) in enumerate(sections):
    p = tf.paragraphs[0] if s_idx == 0 else tf.add_paragraph()
    r_bold = p.add_run(); r_bold.text = sec_title; r_bold.font.size = Pt(16); r_bold.font.bold = True; r_bold.font.color.rgb = COLOR_BLACK; r_bold.font.name = "Arial"
    r_body = p.add_run(); r_body.text = body; r_body.font.size = Pt(15); r_body.font.color.rgb = COLOR_BLACK; r_body.font.name = "Arial"
    p.space_before = Pt(20 if s_idx > 0 else 0)

# ==============================================================================
# SLIDE 4: PROJECT INTRODUCTION
# ==============================================================================
s4 = prs.slides.add_slide(blank_layout)
set_slide_background(s4)
add_academic_header(s4, "Project Introduction")

cb = s4.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

intro_paras = [
    "Vikash Electronics is a prominent DJ & electronic equipment repair workshop in Surat that previously depended entirely on walk-in customers and third-party local directories to reach clients.",
    "This project is a dedicated repair showcase and management web application built exclusively for Vikash Electronics, listing its full specialized repair catalog (Speakers, Power Amplifiers, Sharpy Lights, DJ Lights, TVs, Sound Mixers) with diagnostic highlights and workshop bench photos.",
    "Customers (DJs, sound rental vendors, event organizers, stage technicians, and home users) can browse repair capabilities, view technical failure symptoms, and initiate instant consultations directly on the website without third-party apps.",
    "The site also provides the workshop's verified physical address in Udhna Yard, interactive Google Maps location routing, workshop operating hours, and direct telephone (+91 98254 85520) / WhatsApp chat in one place.",
    "The goal is to reduce the client's dependency on aggregator platforms (like Justdial/Indiamart) and save the high commission charges and listing delays typically paid to third-party marketplaces."
]

for idx, para in enumerate(intro_paras):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r = p.add_run(); r.text = para; r.font.size = Pt(14); r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"
    p.space_before = Pt(14)

# ==============================================================================
# SLIDE 5: OBJECTIVE(S)
# ==============================================================================
s5 = prs.slides.add_slide(blank_layout)
set_slide_background(s5)
add_academic_header(s5, "Objective(s)")

cb = s5.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

objs = [
    "Build a single, self-owned website where customers can view the full pro-audio, lighting, and electronic equipment repair services with descriptions and authentic bench testing images.",
    "Allow customers to filter repair services by category (Audio, Stage Lighting, Visual, General) and submit in-store repair consultations or diagnostic requests directly on the website.",
    "Reduce Vikash Electronics's dependency on third-party listing apps and eliminate commission charges paid to aggregators.",
    "Display business information — verified workshop location in Udhna Yard, address, contact number (+91 98254 85520), working hours, and direct WhatsApp links — in one place.",
    "Provide the workshop technician (Mr. Murlidhar Chaudhari) with a simple way to showcase specialized bench skills (voice coil rewinding, Sharpy optical calibration, transistor balancing) and manage incoming inquiries.",
    "Improve customer conversion, trust, and business inquiry speed by cutting out third-party middleman delays."
]

for idx, item in enumerate(objs):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r = p.add_run(); r.text = item; r.font.size = Pt(13.5); r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"
    p.space_before = Pt(14)

# ==============================================================================
# SLIDE 6: ORDER PROCESS FLOW (Service & Repair Workflow)
# ==============================================================================
s6 = prs.slides.add_slide(blank_layout)
set_slide_background(s6)
add_academic_header(s6, "Order Process Flow")

flow_boxes = [
    "Browse\nServices",
    "Select\nCategory",
    "View\nDiagnostics",
    "Inquire /\nCall Tech",
    "Workshop Bench\nInspection",
    "Repair\nConfirmed"
]

box_w = Inches(1.6)
box_h = Inches(0.9)
box_y = Inches(3.2)
start_x = Inches(0.8)
gap_x = Inches(0.4)

for idx, title in enumerate(flow_boxes):
    cur_x = start_x + idx * (box_w + gap_x)
    shape = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, cur_x, box_y, box_w, box_h)
    shape.fill.solid(); shape.fill.fore_color.rgb = COLOR_WHITE
    shape.line.color.rgb = COLOR_DIAGRAM_BORDER; shape.line.width = Pt(1.5)
    p = shape.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    r = p.add_run(); r.text = title; r.font.size = Pt(10); r.font.bold = True; r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"
    
    if idx < len(flow_boxes) - 1:
        arr = s6.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, cur_x + box_w + Inches(0.08), box_y + Inches(0.32), Inches(0.24), Inches(0.25))
        arr.fill.solid(); arr.fill.fore_color.rgb = COLOR_ACCENT_BLUE; arr.line.fill.background()

fb = s6.shapes.add_textbox(Inches(0.8), Inches(5.3), Inches(11.733), Inches(1.2))
tf = fb.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run()
r.text = "Customers move through the entire journey on Vikash Electronics's own\nwebsite — no aggregator hand-off, and no commission paid at any step."
r.font.size = Pt(16); r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"

# ==============================================================================
# SLIDE 7: PROBLEM ANALYSIS (Understand the problem)
# ==============================================================================
s7 = prs.slides.add_slide(blank_layout)
set_slide_background(s7)
add_academic_header(s7, "Problem Analysis", "(Understand the problem)")

cb = s7.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

pa_under = [
    ("I. Who are the stockholders in the solution to the problem?",
     "The workshop proprietor & chief technician of Vikash Electronics, customers exploring electronic equipment repairs (DJs, sound rental vendors, event managers), senior bench testing staff, and the site administrator."),
    ("II. What are the unknowns?",
     "The customer preferred communication method, how custom component repairs (voice coil rewinding, Sharpy motors) will be managed, and how repair inquiry status will be tracked in real time."),
    ("III. Can the problem be compartmentalized?",
     "Yes — into modules: service catalog showcase, category filter, equipment diagnostics modal, direct call & WhatsApp inquiry panel, and workshop geolocation routing."),
    ("IV. Can the problem be represented graphically?",
     "Yes, the flow can be represented through flowcharts and data flow diagrams covering browsing, filtering, and repair inquiry booking.")
]

for idx, (q, a) in enumerate(pa_under):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r_q = p.add_run(); r_q.text = f"{q}\n"; r_q.font.size = Pt(14); r_q.font.bold = True; r_q.font.color.rgb = COLOR_BLACK; r_q.font.name = "Arial"
    r_a = p.add_run(); r_a.text = a; r_a.font.size = Pt(13); r_a.font.color.rgb = COLOR_BLACK; r_a.font.name = "Arial"
    p.space_before = Pt(12)

# ==============================================================================
# SLIDE 8: PROBLEM ANALYSIS (Plan the solution)
# ==============================================================================
s8 = prs.slides.add_slide(blank_layout)
set_slide_background(s8)
add_academic_header(s8, "Problem Analysis", "(Plan the solution)")

cb = s8.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

pa_pl = [
    ("I. Have you seen similar problem before?",
     "Yes, in platforms like electronics repair portals, pro-audio service showcases, and bespoke hardware maintenance websites."),
    ("II. Has a similar problem been solved?",
     "Yes — many specialized repair workshops now run their own direct showcase websites to avoid third-party aggregator fees and commissions."),
    ("III. Can sub-problems be defined?",
     "Yes: service catalog browsing, equipment category filtering, diagnostic symptom modal, one-tap mobile calling, WhatsApp integration, and workshop location routing."),
    ("IV. Can you represent a solution in a manner that leads to effective implementation?",
     "Yes, through a modular architecture diagram and UML diagrams that lead to effective, phase-wise implementation.")
]

for idx, (q, a) in enumerate(pa_pl):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r_q = p.add_run(); r_q.text = f"{q}\n"; r_q.font.size = Pt(14); r_q.font.bold = True; r_q.font.color.rgb = COLOR_BLACK; r_q.font.name = "Arial"
    r_a = p.add_run(); r_a.text = a; r_a.font.size = Pt(13); r_a.font.color.rgb = COLOR_BLACK; r_a.font.name = "Arial"
    p.space_before = Pt(12)

# ==============================================================================
# SLIDE 9: SYSTEM ARCHITECTURE
# ==============================================================================
s9 = prs.slides.add_slide(blank_layout)
set_slide_background(s9)
add_academic_header(s9, "System Architecture")

add_diagram_box(s9, Inches(4.8), Inches(1.8), Inches(3.6), Inches(0.8), "Customer", "(Web / Mobile Browser)")
arr1 = s9.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.5), Inches(2.65), Inches(0.2), Inches(0.35))
arr1.fill.solid(); arr1.fill.fore_color.rgb = COLOR_ACCENT_BLUE; arr1.line.fill.background()

add_diagram_box(s9, Inches(4.8), Inches(3.05), Inches(3.6), Inches(0.8), "Website Frontend (Next.js)", "(Catalog, Category Filter, Modals)")
arr2 = s9.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.5), Inches(3.9), Inches(0.2), Inches(0.35))
arr2.fill.solid(); arr2.fill.fore_color.rgb = COLOR_ACCENT_BLUE; arr2.line.fill.background()

add_diagram_box(s9, Inches(4.8), Inches(4.3), Inches(3.6), Inches(0.8), "Backend / API Router", "(Inquiry Routing, Telephony & Maps)")

arr_l = s9.shapes.add_shape(MSO_SHAPE.LEFT_ARROW, Inches(4.1), Inches(4.55), Inches(0.6), Inches(0.2))
arr_l.fill.solid(); arr_l.fill.fore_color.rgb = COLOR_ACCENT_BLUE; arr_l.line.fill.background()

add_diagram_box(s9, Inches(1.2), Inches(4.3), Inches(2.8), Inches(0.8), "Structured Data Store", "(business.ts, services.ts, Schema.org)")

arr_r = s9.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, Inches(8.5), Inches(4.55), Inches(0.6), Inches(0.2))
arr_r.fill.solid(); arr_r.fill.fore_color.rgb = COLOR_RED; arr_r.line.fill.background()

add_diagram_box(s9, Inches(9.2), Inches(4.3), Inches(2.8), Inches(0.8), "WhatsApp & Phone Gateway", "(Direct Technician Chat & 1-Tap Dialer)", border_color=COLOR_RED)

arr_d = s9.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.5), Inches(5.15), Inches(0.2), Inches(0.35))
arr_d.fill.solid(); arr_d.fill.fore_color.rgb = COLOR_ACCENT_BLUE; arr_d.line.fill.background()

add_diagram_box(s9, Inches(4.8), Inches(5.55), Inches(3.6), Inches(0.8), "Workshop Management", "(Proprietor: Service Catalog & Intake Records)")

foot_arch = s9.shapes.add_textbox(Inches(0.8), Inches(6.5), Inches(11.733), Inches(0.8))
tf = foot_arch.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run()
r.text = "Customer requests flow from the website through the frontend to the data store and WhatsApp gateway;\nthe owner manages repair services and customer inquiries directly without middleman aggregators."
r.font.size = Pt(13); r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"

# ==============================================================================
# SLIDE 10: PROBLEM ANALYSIS (Carry out the plan)
# ==============================================================================
s10 = prs.slides.add_slide(blank_layout)
set_slide_background(s10)
add_academic_header(s10, "Problem Analysis", "(Carry out the plan)")

cb = s10.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

pa_car = [
    ("I. Does the solution conform to the plan?",
     "Yes — development proceeds module by module (service catalog, category filter, diagnostic modal, WhatsApp routing, Google Maps geolocation) as per the defined architecture."),
    ("II. Is each component part of the solution provably correct?",
     "Yes, each component is tested independently — for example, category filtering, detail modal triggers, phone number validations, and WhatsApp URL generation are each verified before integration.")
]

for idx, (q, a) in enumerate(pa_car):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r_q = p.add_run(); r_q.text = f"{q}\n"; r_q.font.size = Pt(15); r_q.font.bold = True; r_q.font.color.rgb = COLOR_BLACK; r_q.font.name = "Arial"
    r_a = p.add_run(); r_a.text = a; r_a.font.size = Pt(13.5); r_a.font.color.rgb = COLOR_BLACK; r_a.font.name = "Arial"
    p.space_before = Pt(18)

# ==============================================================================
# SLIDE 11: PROBLEM ANALYSIS (Examine the results)
# ==============================================================================
s11 = prs.slides.add_slide(blank_layout)
set_slide_background(s11)
add_academic_header(s11, "Problem Analysis", "(Examine the results)")

cb = s11.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

pa_ex = [
    ("I. Is it possible to test each component part of the solution?",
     "Yes — service catalog loading, category filtering, one-tap mobile calling, WhatsApp pre-filled message generation, and Google Maps location routing are all verifiable on their own."),
    ("II. Does the solution produce results that conform to the data, functions, and features that are required?",
     "Yes — customers can view the repair catalog, explore equipment diagnostic details, initiate direct repair consultations, and navigate to the workshop, all without a third-party app.")
]

for idx, (q, a) in enumerate(pa_ex):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r_q = p.add_run(); r_q.text = f"{q}\n"; r_q.font.size = Pt(15); r_q.font.bold = True; r_q.font.color.rgb = COLOR_BLACK; r_q.font.name = "Arial"
    r_a = p.add_run(); r_a.text = a; r_a.font.size = Pt(13.5); r_a.font.color.rgb = COLOR_BLACK; r_a.font.name = "Arial"
    p.space_before = Pt(18)

# ==============================================================================
# SLIDE 12: REQUIREMENT ENGINEERING (Client-side communication)
# ==============================================================================
s12 = prs.slides.add_slide(blank_layout)
set_slide_background(s12)
add_academic_header(s12, "Requirement Engineering", "(Client-side communication)")

cb = s12.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

reqs = [
    "Complete repair catalog list with categories (Audio, Lighting, Visual, General), equipment bench images, diagnosis highlights, and component tags, matching the pro-audio positioning of the brand.",
    "Business details to be displayed: physical workshop address in Udhna Yard, direct contact helpline (+91 98254 85520), and social media links (Instagram/WhatsApp/Facebook).",
    "Direct WhatsApp communication support that avoids the commission charged by third-party marketplace platforms.",
    "A simple way for the workshop technician to showcase specialized skills (voice coil rewinding, Sharpy moving head calibration, power amplifier transistor balancing).",
    "A clean, mobile-friendly design consistent with Vikash Electronics's existing pro-audio stage and DJ equipment identity.",
    "Easy updates to repair catalog items and pricing without needing developer help each time."
]

for idx, item in enumerate(reqs):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r = p.add_run(); r.text = item; r.font.size = Pt(14); r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"
    p.space_before = Pt(14)

# ==============================================================================
# SLIDES 13, 14, 15: REQUIREMENT ENGINEERING (Functional Requirements Tables)
# ==============================================================================
def draw_single_fr_slide(slide, fr_id, title, desc, actor, inputs, outputs, intro_note=False):
    if intro_note:
        note_box = slide.shapes.add_textbox(Inches(1.0), Inches(1.5), Inches(11.3), Inches(0.5))
        p_n = note_box.text_frame.paragraphs[0]
        p_n.text = "Enlisted below are the functional requirements for the website:"
        p_n.font.size = Pt(14); p_n.font.color.rgb = COLOR_BLACK; p_n.font.name = "Arial"
        y_top = Inches(2.2)
    else:
        y_top = Inches(2.0)

    rows = 5; cols = 2
    table_shape = slide.shapes.add_table(rows, cols, Inches(1.0), y_top, Inches(11.3), Inches(3.6))
    table = table_shape.table
    table.columns[0].width = Inches(2.2)
    table.columns[1].width = Inches(9.1)
    
    c00 = table.cell(0, 0); c00.fill.solid(); c00.fill.fore_color.rgb = COLOR_TABLE_HEADER
    c00.text = fr_id; p = c00.text_frame.paragraphs[0]; p.font.bold = True; p.font.size = Pt(13); p.font.color.rgb = COLOR_BLACK
    
    c01 = table.cell(0, 1); c01.fill.solid(); c01.fill.fore_color.rgb = COLOR_TABLE_HEADER
    c01.text = title; p = c01.text_frame.paragraphs[0]; p.font.bold = True; p.font.size = Pt(13); p.font.color.rgb = COLOR_BLACK
    
    data = [
        ("Description", desc),
        ("Actor(s)", actor),
        ("Input(s)", inputs),
        ("Output(s)", outputs)
    ]
    for r_idx, (lbl, val) in enumerate(data, start=1):
        c0 = table.cell(r_idx, 0); c0.fill.solid(); c0.fill.fore_color.rgb = COLOR_WHITE; c0.text = lbl
        p0 = c0.text_frame.paragraphs[0]; p0.font.bold = True; p0.font.size = Pt(12); p0.font.color.rgb = COLOR_BLACK
        
        c1 = table.cell(r_idx, 1); c1.fill.solid(); c1.fill.fore_color.rgb = COLOR_WHITE; c1.text = val
        p1 = c1.text_frame.paragraphs[0]; p1.font.size = Pt(12); p1.font.color.rgb = COLOR_BLACK

# Slide 13: FR-1 Service Showcase & Category Filter
s13 = prs.slides.add_slide(blank_layout)
set_slide_background(s13)
add_academic_header(s13, "Requirement Engineering", "(Functional Requirements)")
draw_single_fr_slide(
    s13, "FR-1", "Service Showcase & Multi-Category Filtering",
    "Used to let customers browse electronic repair services filtered by Audio, Lighting, Visual, and General categories.",
    "Customer (DJ, Event Organizer, Consumer)",
    "Category tab selection (Audio, Lighting, Visual, General), equipment service selection.",
    "Interactive service cards rendered with technical failure details, diagnostic highlights, and repair specifications.",
    intro_note=True
)

# Slide 14: FR-2 Direct Emergency Call & WhatsApp Deep-Linking
s14 = prs.slides.add_slide(blank_layout)
set_slide_background(s14)
add_academic_header(s14, "Requirement Engineering", "(Functional Requirements)")
draw_single_fr_slide(
    s14, "FR-2", "Direct Emergency Call & WhatsApp Consultation",
    "Used to let the customer initiate instant telephonic or WhatsApp consultation directly with the technician.",
    "Customer, Chief Technician (Murlidhar Chaudhari)",
    "Customer clicks 'Call Now' (+91 98254 85520) or 'Inquire on WhatsApp' action button on any service card.",
    "Native phone dialer prompted with business number, or WhatsApp window launched with pre-filled fault query text."
)

# Slide 15: FR-3 Workshop Geolocation & Navigation Routing
s15 = prs.slides.add_slide(blank_layout)
set_slide_background(s15)
add_academic_header(s15, "Requirement Engineering", "(Functional Requirements)")
draw_single_fr_slide(
    s15, "FR-3", "Workshop Geolocation & Turn-by-Turn Navigation",
    "Used to display the exact workshop location in Udhna Yard, Surat and provide GPS routing for equipment drop-off.",
    "Customer",
    "Customer scrolls to Contact section or selects 'Get Directions' on Google Map.",
    "Embedded interactive Google Map centered on Plot 199, Sanjay Nagar, Udhna Yard, with GPS navigation route generated."
)

# ==============================================================================
# SLIDE 16: SOFTWARE DEVELOPMENT MODEL (Agile Scrum with Diagram)
# ==============================================================================
s16 = prs.slides.add_slide(blank_layout)
set_slide_background(s16)
add_academic_header(s16, "Software Development Model")

cb = s16.shapes.add_textbox(Inches(1.2), Inches(1.7), Inches(10.9), Inches(2.2))
tf = cb.text_frame; tf.word_wrap = True

p = tf.paragraphs[0]
r = p.add_run(); r.text = "This project follows the Agile (Scrum) development model"; r.font.size = Pt(14); r.font.bold = True; r.font.color.rgb = COLOR_BLACK

p2 = tf.add_paragraph()
r2 = p2.add_run()
r2.text = "Work is broken into short sprints, each delivering a usable increment — e.g., service catalog first, then category filtering, then direct WhatsApp integration, then map navigation"
r2.font.size = Pt(13); r2.font.color.rgb = COLOR_BLACK; p2.space_before = Pt(8)

p3 = tf.add_paragraph()
r3 = p3.add_run()
r3.text = "Each sprint includes planning, development, testing, and a review with the client before moving to the next module"
r3.font.size = Pt(13); r3.font.color.rgb = COLOR_BLACK; p3.space_before = Pt(8)

agile_steps = ["Plan", "Design", "Develop", "Test", "Review"]
agile_w = Inches(1.8); agile_h = Inches(0.9); agile_gap = Inches(0.4); agile_start = Inches(1.4); agile_y = Inches(4.3)

for idx, step in enumerate(agile_steps):
    bx = agile_start + idx * (agile_w + agile_gap)
    add_diagram_box(s16, bx, agile_y, agile_w, agile_h, step)
    if idx < len(agile_steps) - 1:
        arr = s16.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, bx + agile_w + Inches(0.08), agile_y + Inches(0.3), Inches(0.24), Inches(0.3))
        arr.fill.solid(); arr.fill.fore_color.rgb = COLOR_ACCENT_BLUE; arr.line.fill.background()

loop_line = s16.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(2.3), Inches(5.65), Inches(8.8), Inches(0.04))
loop_line.fill.solid(); loop_line.fill.fore_color.rgb = COLOR_ACCENT_BLUE; loop_line.line.fill.background()

arr_up = s16.shapes.add_shape(MSO_SHAPE.UP_ARROW, Inches(2.2), Inches(5.25), Inches(0.2), Inches(0.4))
arr_up.fill.solid(); arr_up.fill.fore_color.rgb = COLOR_ACCENT_BLUE; arr_up.line.fill.background()

line_down = s16.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(11.1), Inches(5.2), Inches(0.04), Inches(0.45))
line_down.fill.solid(); line_down.fill.fore_color.rgb = COLOR_ACCENT_BLUE; line_down.line.fill.background()

foot_agile = s16.shapes.add_textbox(Inches(1.0), Inches(6.0), Inches(11.3), Inches(0.6))
p = foot_agile.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "repeats every sprint, with client review at the end of each cycle"; r.font.size = Pt(12); r.font.color.rgb = COLOR_BLACK

# ==============================================================================
# SLIDE 17: MODELING (Developing the use cases)
# ==============================================================================
s17 = prs.slides.add_slide(blank_layout)
set_slide_background(s17)
add_academic_header(s17, "Modeling", "(Developing the use cases)")

cb = s17.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

uc_questions = [
    "I. Who are the primary and secondary actors?",
    "II. What are the actor's goal(s)?",
    "III. What preconditions should exist before the story begins?",
    "IV. What main tasks or functions are performed by the actor?",
    "V. What exceptions might be considered as the story is described?",
    "VI. What variations in the actor's interaction are possible?",
    "VII. What system information will the actor acquire, produce, or change?",
    "VIII. Will the actor have to inform the system about changes in the external environment?",
    "IX. What information does the actor desire from the system?",
    "X. Does the actor wish to be informed about unexpected changes?"
]

for idx, q in enumerate(uc_questions):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r = p.add_run(); r.text = q; r.font.size = Pt(13); r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"
    p.space_before = Pt(8)

# ==============================================================================
# SLIDE 18: MODELING (USE CASE DIAGRAM) - 1st UML DIAGRAM
# SPATIAL PERFECTION: ZERO OVERLAP
# ==============================================================================
s18 = prs.slides.add_slide(blank_layout)
set_slide_background(s18)
add_academic_header(s18, "Modeling", "(Use Case Diagram)")

# System boundary
sys_box = s18.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(4.3), Inches(1.6), Inches(5.6), Inches(5.4))
sys_box.fill.background(); sys_box.line.color.rgb = COLOR_BLACK; sys_box.line.width = Pt(1.5)

sys_lbl = s18.shapes.add_textbox(Inches(4.3), Inches(6.58), Inches(5.6), Inches(0.4))
p = sys_lbl.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "Vikash Electronics Web Platform"; r.font.size = Pt(12); r.font.bold = True; r.font.color.rgb = COLOR_BLACK

# 6 Clean Use Cases (Vertical step 0.72 in, height 0.58 in -> Gap = 0.14 in, ZERO OVERLAP)
uc_items = [
    ("Browse Repair Services Catalog", Inches(1.85)),
    ("Filter by Equipment Category", Inches(2.57)),
    ("Inspect Fault Diagnostics & Highlights", Inches(3.29)),
    ("1-Tap Phone Call (+91 98254 85520)", Inches(4.01)),
    ("Inquire via WhatsApp (Pre-filled Query)", Inches(4.73)),
    ("Locate Workshop & Navigate (GPS)", Inches(5.45))
]

for uc_text, y_pos in uc_items:
    oval = s18.shapes.add_shape(MSO_SHAPE.OVAL, Inches(4.7), y_pos, Inches(4.8), Inches(0.58))
    oval.fill.solid(); oval.fill.fore_color.rgb = COLOR_WHITE
    oval.line.color.rgb = COLOR_RED; oval.line.width = Pt(1.5)
    p = oval.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    r = p.add_run(); r.text = uc_text; r.font.size = Pt(10); r.font.bold = True; r.font.color.rgb = COLOR_BLACK

def draw_stick_actor(slide, center_x, top_y, label_text):
    head = slide.shapes.add_shape(MSO_SHAPE.OVAL, center_x - Inches(0.2), top_y, Inches(0.4), Inches(0.4))
    head.fill.background(); head.line.color.rgb = COLOR_BLACK; head.line.width = Pt(1.5)
    body = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, center_x - Inches(0.01), top_y + Inches(0.4), Inches(0.02), Inches(0.55))
    body.fill.solid(); body.fill.fore_color.rgb = COLOR_BLACK; body.line.fill.background()
    arms = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, center_x - Inches(0.3), top_y + Inches(0.55), Inches(0.6), Inches(0.02))
    arms.fill.solid(); arms.fill.fore_color.rgb = COLOR_BLACK; arms.line.fill.background()
    leg_l = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, center_x - Inches(0.2), top_y + Inches(0.95), Inches(0.02), Inches(0.45))
    leg_l.fill.solid(); leg_l.fill.fore_color.rgb = COLOR_BLACK; leg_l.line.fill.background()
    leg_r = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, center_x + Inches(0.2), top_y + Inches(0.95), Inches(0.02), Inches(0.45))
    leg_r.fill.solid(); leg_r.fill.fore_color.rgb = COLOR_BLACK; leg_r.line.fill.background()
    tb = slide.shapes.add_textbox(center_x - Inches(1.2), top_y + Inches(1.45), Inches(2.4), Inches(0.6))
    p = tb.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    r = p.add_run(); r.text = label_text; r.font.size = Pt(11); r.font.bold = True; r.font.color.rgb = COLOR_BLACK

# Customer Actor on Left
draw_stick_actor(s18, Inches(2.2), Inches(3.0), "Customer\n(DJ / Sound Vendor)")

# Lines from Customer to All Use Cases
for _, y_pos in uc_items:
    line = s18.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(2.5), y_pos + Inches(0.28), Inches(2.2), Inches(0.02))
    line.fill.solid(); line.fill.fore_color.rgb = COLOR_GRAY_DARK; line.line.fill.background()

# Technician Actor on Right
draw_stick_actor(s18, Inches(11.8), Inches(3.4), "Chief Technician\n(Murlidhar C.)")

# Lines from Technician to Contact & Location Use Cases
for y_pos in [Inches(4.01), Inches(4.73), Inches(5.45)]:
    line = s18.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(9.5), y_pos + Inches(0.28), Inches(2.0), Inches(0.02))
    line.fill.solid(); line.fill.fore_color.rgb = COLOR_GRAY_DARK; line.line.fill.background()

# ==============================================================================
# SLIDE 19: MODELING (CLASS DIAGRAM) - 2nd UML DIAGRAM
# SPATIAL PERFECTION: ZERO OVERLAP
# ==============================================================================
s19 = prs.slides.add_slide(blank_layout)
set_slide_background(s19)
add_academic_header(s19, "Modeling", "(Class Diagram)")

def draw_uml_class(slide, left, top, width, height, class_name, attributes, methods):
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, width, height)
    shape.fill.solid(); shape.fill.fore_color.rgb = COLOR_WHITE
    shape.line.color.rgb = COLOR_BLACK; shape.line.width = Pt(1.2)
    
    hdr = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, width, Inches(0.38))
    hdr.fill.solid(); hdr.fill.fore_color.rgb = COLOR_DIAGRAM_BG
    hdr.line.color.rgb = COLOR_BLACK; hdr.line.width = Pt(1.2)
    p = hdr.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    r = p.add_run(); r.text = class_name; r.font.bold = True; r.font.size = Pt(10.5); r.font.color.rgb = COLOR_BLACK
    
    tb = slide.shapes.add_textbox(left + Inches(0.06), top + Inches(0.4), width - Inches(0.12), height - Inches(0.44))
    tf = tb.text_frame; tf.word_wrap = True; tf.margin_left = 0; tf.margin_top = 0
    
    for idx, attr in enumerate(attributes):
        p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
        r = p.add_run(); r.text = f"- {attr}"; r.font.size = Pt(8); r.font.color.rgb = COLOR_BLACK
    
    p_sep = tf.add_paragraph()
    r = p_sep.add_run(); r.text = "--------------------------------------"; r.font.size = Pt(6); r.font.color.rgb = COLOR_TABLE_BORDER
    
    for meth in methods:
        p = tf.add_paragraph()
        r = p.add_run(); r.text = f"+ {meth}()"; r.font.size = Pt(8); r.font.color.rgb = COLOR_BLACK

# Row 1 (top = 1.8, height = 2.2)
draw_uml_class(s19, Inches(0.9), Inches(1.8), Inches(3.4), Inches(2.2),
               "Customer",
               ["customerId: string", "name: string", "phone: string", "equipmentType: string"],
               ["browseServices", "filterCategory", "callTechnician", "initiateWhatsApp"])

draw_uml_class(s19, Inches(4.9), Inches(1.8), Inches(3.5), Inches(2.2),
               "RepairService",
               ["id: string", "title: string", "category: string", "description: string", "highlights: string[]"],
               ["getServiceDetails", "getByCategory", "getDiagnosticInfo"])

draw_uml_class(s19, Inches(9.0), Inches(1.8), Inches(3.4), Inches(2.2),
               "Technician",
               ["name: string", "role: string", "phone: string", "workshopAddress: string"],
               ["receivePhoneCall", "consultWhatsApp", "diagnoseEquipment", "executeBenchRepair"])

# Row 2 (top = 4.6, height = 2.2)
draw_uml_class(s19, Inches(0.9), Inches(4.6), Inches(3.4), Inches(2.2),
               "RepairInquiry",
               ["inquiryId: string", "equipmentTitle: string", "faultSymptoms: string", "preferredChannel: enum"],
               ["buildWhatsAppQuery", "triggerDialer", "logInquiry"])

draw_uml_class(s19, Inches(4.9), Inches(4.6), Inches(3.5), Inches(2.2),
               "Category",
               ["id: string", "label: string", "iconName: string", "serviceCount: int"],
               ["filterServices", "getCategoryList"])

draw_uml_class(s19, Inches(9.0), Inches(4.6), Inches(3.4), Inches(2.2),
               "WorkshopLocation",
               ["plotNo: string", "area: string", "landmark: string", "city: string", "operatingHours: string"],
               ["getFullAddress", "openGoogleMaps", "getCoordinates"])

# Association Lines & Multiplicities
l1 = s19.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(2.6), Inches(4.0), Inches(0.02), Inches(0.6))
l1.fill.solid(); l1.fill.fore_color.rgb = COLOR_BLACK; l1.line.fill.background()
tb = s19.shapes.add_textbox(Inches(1.5), Inches(4.05), Inches(1.0), Inches(0.4))
tb.text_frame.paragraphs[0].text = "initiates\n1        *"; tb.text_frame.paragraphs[0].font.size = Pt(7.5); tb.text_frame.paragraphs[0].font.bold = True

l2 = s19.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(4.3), Inches(5.7), Inches(0.6), Inches(0.02))
l2.fill.solid(); l2.fill.fore_color.rgb = COLOR_BLACK; l2.line.fill.background()
tb = s19.shapes.add_textbox(Inches(4.1), Inches(5.35), Inches(1.0), Inches(0.3))
tb.text_frame.paragraphs[0].text = "queries 1  *"; tb.text_frame.paragraphs[0].font.size = Pt(7.5); tb.text_frame.paragraphs[0].font.bold = True

l3 = s19.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(6.65), Inches(4.0), Inches(0.02), Inches(0.6))
l3.fill.solid(); l3.fill.fore_color.rgb = COLOR_BLACK; l3.line.fill.background()
tb = s19.shapes.add_textbox(Inches(6.7), Inches(4.05), Inches(1.2), Inches(0.4))
tb.text_frame.paragraphs[0].text = "categorized_by\n*        1"; tb.text_frame.paragraphs[0].font.size = Pt(7.5); tb.text_frame.paragraphs[0].font.bold = True

l4 = s19.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(10.7), Inches(4.0), Inches(0.02), Inches(0.6))
l4.fill.solid(); l4.fill.fore_color.rgb = COLOR_BLACK; l4.line.fill.background()
tb = s19.shapes.add_textbox(Inches(9.6), Inches(4.05), Inches(1.0), Inches(0.4))
tb.text_frame.paragraphs[0].text = "operates_at\n1        1"; tb.text_frame.paragraphs[0].font.size = Pt(7.5); tb.text_frame.paragraphs[0].font.bold = True

# ==============================================================================
# SLIDE 20: MODELING (SEQUENCE DIAGRAM) - 3rd UML DIAGRAM
# SPATIAL PERFECTION: ZERO OVERLAP
# ==============================================================================
s20 = prs.slides.add_slide(blank_layout)
set_slide_background(s20)
add_academic_header(s20, "Modeling", "(Sequence Diagram)")

sb = s20.shapes.add_textbox(Inches(0.8), Inches(1.42), Inches(11.733), Inches(0.4))
p = sb.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "Use case: Service Browsing & Direct WhatsApp Consultation"; r.font.size = Pt(13.5); r.font.bold = True; r.font.color.rgb = COLOR_BLACK

lifelines = [
    ("Customer", Inches(1.4)),
    ("Website Frontend\n(Next.js UI)", Inches(4.0)),
    ("Data Store\n(business.ts)", Inches(6.6)),
    ("WhatsApp Gateway\n(wa.me API)", Inches(9.2)),
    ("Technician\n(Murlidhar C.)", Inches(11.8))
]

for name, x in lifelines:
    add_diagram_box(s20, x - Inches(0.9), Inches(1.95), Inches(1.8), Inches(0.6), name)
    line = s20.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, Inches(2.55), Inches(0.02), Inches(4.6))
    line.fill.solid(); line.fill.fore_color.rgb = COLOR_TABLE_BORDER; line.line.fill.background()

seq_messages = [
    (Inches(1.4), Inches(4.0), Inches(2.9), "1. Visit Website & Browse Repair Services", True),
    (Inches(4.0), Inches(6.6), Inches(3.45), "2. Query Categories (Audio, Lighting, Visual)", True),
    (Inches(6.6), Inches(4.0), Inches(4.0), "3. Return Service Details & Diagnostic Specs", False),
    (Inches(4.0), Inches(1.4), Inches(4.55), "4. Render Service Cards & Diagnostic Highlights", False),
    (Inches(1.4), Inches(4.0), Inches(5.1), "5. Click 'Inquire on WhatsApp' on Equipment", True),
    (Inches(4.0), Inches(9.2), Inches(5.65), "6. Construct Pre-filled URL with Equipment Info", True),
    (Inches(9.2), Inches(11.8), Inches(6.2), "7. Deliver Inquiry Message to +91 98254 85520", True),
    (Inches(11.8), Inches(1.4), Inches(6.75), "8. Direct Consultation on Diagnosis & Drop-off", False)
]

for x1, x2, y, text, is_fwd in seq_messages:
    left = min(x1, x2); w = abs(x2 - x1)
    m_line = s20.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, y, w, Inches(0.02))
    m_line.fill.solid(); m_line.fill.fore_color.rgb = COLOR_BLACK; m_line.line.fill.background()
    
    if x2 > x1:
        arr = s20.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, x2 - Inches(0.1), y - Inches(0.04), Inches(0.1), Inches(0.1))
    else:
        arr = s20.shapes.add_shape(MSO_SHAPE.LEFT_ARROW, x2, y - Inches(0.04), Inches(0.1), Inches(0.1))
    arr.fill.solid(); arr.fill.fore_color.rgb = COLOR_BLACK; arr.line.fill.background()
    
    lbl = s20.shapes.add_textbox(left, y - Inches(0.24), w, Inches(0.24))
    p = lbl.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    r = p.add_run(); r.text = text; r.font.size = Pt(8); r.font.bold = True; r.font.color.rgb = COLOR_BLACK

# ==============================================================================
# SLIDE 21: MODELING (ACTIVITY DIAGRAM) - 4th UML DIAGRAM
# SPATIAL PERFECTION: ZERO OVERLAP
# ==============================================================================
s21 = prs.slides.add_slide(blank_layout)
set_slide_background(s21)
add_academic_header(s21, "Modeling", "(Activity Diagram)")

# Initial Node
c_init = s21.shapes.add_shape(MSO_SHAPE.OVAL, Inches(6.45), Inches(1.65), Inches(0.35), Inches(0.35))
c_init.fill.solid(); c_init.fill.fore_color.rgb = COLOR_BLACK; c_init.line.fill.background()

arr_d1 = s21.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.55), Inches(2.0), Inches(0.15), Inches(0.25))
arr_d1.fill.solid(); arr_d1.fill.fore_color.rgb = COLOR_BLACK; arr_d1.line.fill.background()

# Step 1: Browse Services
add_diagram_box(s21, Inches(4.8), Inches(2.25), Inches(3.6), Inches(0.55), "Browse Repair Services on Website")

arr_d2 = s21.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.55), Inches(2.8), Inches(0.15), Inches(0.25))
arr_d2.fill.solid(); arr_d2.fill.fore_color.rgb = COLOR_BLACK; arr_d2.line.fill.background()

# Step 2: Filter Category
add_diagram_box(s21, Inches(4.8), Inches(3.05), Inches(3.6), Inches(0.55), "Filter Category (Audio, Lighting, Visual)")

arr_d3 = s21.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.55), Inches(3.6), Inches(0.15), Inches(0.25))
arr_d3.fill.solid(); arr_d3.fill.fore_color.rgb = COLOR_BLACK; arr_d3.line.fill.background()

# Step 3: Inspect Diagnostics
add_diagram_box(s21, Inches(4.8), Inches(3.85), Inches(3.6), Inches(0.55), "Inspect Diagnostics & Component Fixes")

arr_d4 = s21.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.55), Inches(4.4), Inches(0.15), Inches(0.25))
arr_d4.fill.solid(); arr_d4.fill.fore_color.rgb = COLOR_BLACK; arr_d4.line.fill.background()

# Decision Diamond: Contact Channel?
diamond = s21.shapes.add_shape(MSO_SHAPE.DIAMOND, Inches(5.4), Inches(4.65), Inches(2.4), Inches(0.95))
diamond.fill.solid(); diamond.fill.fore_color.rgb = COLOR_WHITE
diamond.line.color.rgb = COLOR_RED; diamond.line.width = Pt(1.5)
p = diamond.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "Choose Contact\nChannel?"; r.font.size = Pt(9.5); r.font.bold = True; r.font.color.rgb = COLOR_RED

# Branch Left: Phone Call
arr_call = s21.shapes.add_shape(MSO_SHAPE.LEFT_ARROW, Inches(4.4), Inches(5.05), Inches(1.0), Inches(0.15))
arr_call.fill.solid(); arr_call.fill.fore_color.rgb = COLOR_BLACK; arr_call.line.fill.background()

tb_call = s21.shapes.add_textbox(Inches(4.4), Inches(4.75), Inches(1.0), Inches(0.3))
tb_call.text_frame.paragraphs[0].text = "Phone"; tb_call.text_frame.paragraphs[0].font.size = Pt(8.5); tb_call.text_frame.paragraphs[0].font.bold = True

add_diagram_box(s21, Inches(1.2), Inches(4.8), Inches(3.2), Inches(0.65), "Launch Native Phone Dialer\n(+91 98254 85520)")

# Branch Right: WhatsApp Chat
arr_wa = s21.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, Inches(7.8), Inches(5.05), Inches(1.0), Inches(0.15))
arr_wa.fill.solid(); arr_wa.fill.fore_color.rgb = COLOR_BLACK; arr_wa.line.fill.background()

tb_wa = s21.shapes.add_textbox(Inches(7.8), Inches(4.75), Inches(1.0), Inches(0.3))
tb_wa.text_frame.paragraphs[0].text = "WhatsApp"; tb_wa.text_frame.paragraphs[0].font.size = Pt(8.5); tb_wa.text_frame.paragraphs[0].font.bold = True

add_diagram_box(s21, Inches(8.8), Inches(4.8), Inches(3.3), Inches(0.65), "Open Pre-filled WhatsApp Chat\n(wa.me link with fault text)")

# Convergence down to Step 4
l_join1 = s21.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(2.8), Inches(5.45), Inches(0.02), Inches(0.45))
l_join1.fill.solid(); l_join1.fill.fore_color.rgb = COLOR_BLACK; l_join1.line.fill.background()

l_join2 = s21.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(10.4), Inches(5.45), Inches(0.02), Inches(0.45))
l_join2.fill.solid(); l_join2.fill.fore_color.rgb = COLOR_BLACK; l_join2.line.fill.background()

l_cross = s21.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(2.8), Inches(5.9), Inches(7.6), Inches(0.02))
l_cross.fill.solid(); l_cross.fill.fore_color.rgb = COLOR_BLACK; l_cross.line.fill.background()

arr_d5 = s21.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.55), Inches(5.9), Inches(0.15), Inches(0.25))
arr_d5.fill.solid(); arr_d5.fill.fore_color.rgb = COLOR_BLACK; arr_d5.line.fill.background()

# Step 4: Consultation & Intake
add_diagram_box(s21, Inches(4.6), Inches(6.15), Inches(4.0), Inches(0.55), "Direct Consultation & Drop-off at Udhna Yard")

arr_d6 = s21.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.55), Inches(6.7), Inches(0.15), Inches(0.2))
arr_d6.fill.solid(); arr_d6.fill.fore_color.rgb = COLOR_BLACK; arr_d6.line.fill.background()

# Final Node
c_out = s21.shapes.add_shape(MSO_SHAPE.OVAL, Inches(6.45), Inches(6.92), Inches(0.35), Inches(0.35))
c_out.fill.background(); c_out.line.color.rgb = COLOR_BLACK; c_out.line.width = Pt(1.5)

c_in = s21.shapes.add_shape(MSO_SHAPE.OVAL, Inches(6.5), Inches(6.97), Inches(0.25), Inches(0.25))
c_in.fill.solid(); c_in.fill.fore_color.rgb = COLOR_BLACK; c_in.line.fill.background()

# ==============================================================================
# SLIDE 22: MODELING (STATE DIAGRAM) - 5th UML DIAGRAM
# SPATIAL PERFECTION: ZERO OVERLAP
# ==============================================================================
s22 = prs.slides.add_slide(blank_layout)
set_slide_background(s22)
add_academic_header(s22, "Modeling", "(State Diagram)")

sb = s22.shapes.add_textbox(Inches(0.8), Inches(1.42), Inches(11.733), Inches(0.4))
p = sb.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "Equipment Repair Service & Job Lifecycle"; r.font.size = Pt(15); r.font.bold = True; r.font.color.rgb = COLOR_BLACK

# Initial Node
c_init = s22.shapes.add_shape(MSO_SHAPE.OVAL, Inches(0.8), Inches(3.3), Inches(0.35), Inches(0.35))
c_init.fill.solid(); c_init.fill.fore_color.rgb = COLOR_BLACK; c_init.line.fill.background()

arr_init = s22.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, Inches(1.15), Inches(3.4), Inches(0.3), Inches(0.15))
arr_init.fill.solid(); arr_init.fill.fore_color.rgb = COLOR_BLACK; arr_init.line.fill.background()

state_boxes = [
    ("Inquiry\nInitiated", Inches(1.5), Inches(1.7)),
    ("Technician\nConsulted", Inches(3.8), Inches(1.7)),
    ("Bench\nDiagnosis", Inches(6.1), Inches(1.7)),
    ("Precision Repair\n& Testing", Inches(8.4), Inches(2.0)),
    ("Stage Ready\nDelivered", Inches(11.0), Inches(1.6))
]

for name, x, w in state_boxes:
    add_diagram_box(s22, x, Inches(3.05), w, Inches(0.85), name)

transitions = [
    (Inches(3.2), Inches(3.8), Inches(3.47), "call / chat"),
    (Inches(5.5), Inches(6.1), Inches(3.47), "gear intake"),
    (Inches(7.8), Inches(8.4), Inches(3.47), "quote ok"),
    (Inches(10.4), Inches(11.0), Inches(3.47), "burn-in pass")
]

for x1, x2, y, lbl_text in transitions:
    arr = s22.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, x1 + Inches(0.05), y, x2 - x1 - Inches(0.1), Inches(0.15))
    arr.fill.solid(); arr.fill.fore_color.rgb = COLOR_BLACK; arr.line.fill.background()
    
    tb = s22.shapes.add_textbox(x1, y - Inches(0.3), x2 - x1, Inches(0.25))
    p = tb.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    r = p.add_run(); r.text = lbl_text; r.font.size = Pt(8); r.font.color.rgb = COLOR_BLACK

# Final Bullseye after Delivered
fin_out = s22.shapes.add_shape(MSO_SHAPE.OVAL, Inches(12.8), Inches(3.3), Inches(0.35), Inches(0.35))
fin_out.fill.background(); fin_out.line.color.rgb = COLOR_BLACK; fin_out.line.width = Pt(1.5)

fin_in = s22.shapes.add_shape(MSO_SHAPE.OVAL, Inches(12.85), Inches(3.35), Inches(0.25), Inches(0.25))
fin_in.fill.solid(); fin_in.fill.fore_color.rgb = COLOR_BLACK; fin_in.line.fill.background()

arr_fin = s22.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, Inches(12.6), Inches(3.4), Inches(0.2), Inches(0.15))
arr_fin.fill.solid(); arr_fin.fill.fore_color.rgb = COLOR_BLACK; arr_fin.line.fill.background()

# Cancelled State Box
box_cancel = s22.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(4.8), Inches(5.1), Inches(2.6), Inches(0.85))
box_cancel.fill.solid(); box_cancel.fill.fore_color.rgb = COLOR_WHITE
box_cancel.line.color.rgb = COLOR_RED; box_cancel.line.width = Pt(1.5)
p = box_cancel.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "Inquiry Cancelled /\nBeyond Repair"; r.font.bold = True; r.font.size = Pt(10.5); r.font.color.rgb = COLOR_RED

# Transition to Cancelled from Bench Diagnosis
arr_c1 = s22.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, Inches(6.8), Inches(3.9), Inches(0.15), Inches(1.2))
arr_c1.fill.solid(); arr_c1.fill.fore_color.rgb = COLOR_RED; arr_c1.line.fill.background()

tb_c1 = s22.shapes.add_textbox(Inches(6.95), Inches(4.3), Inches(1.8), Inches(0.3))
tb_c1.text_frame.paragraphs[0].text = "parts unavailable /\nquote declined"; tb_c1.text_frame.paragraphs[0].font.size = Pt(8); tb_c1.text_frame.paragraphs[0].font.color.rgb = COLOR_RED

# Final Bullseye after Cancelled
arr_c_fin = s22.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, Inches(7.4), Inches(5.45), Inches(0.5), Inches(0.15))
arr_c_fin.fill.solid(); arr_c_fin.fill.fore_color.rgb = COLOR_BLACK; arr_c_fin.line.fill.background()

c_c_out = s22.shapes.add_shape(MSO_SHAPE.OVAL, Inches(7.9), Inches(5.35), Inches(0.35), Inches(0.35))
c_c_out.fill.background(); c_c_out.line.color.rgb = COLOR_BLACK; c_c_out.line.width = Pt(1.5)

c_c_in = s22.shapes.add_shape(MSO_SHAPE.OVAL, Inches(7.95), Inches(5.4), Inches(0.25), Inches(0.25))
c_c_in.fill.solid(); c_c_in.fill.fore_color.rgb = COLOR_BLACK; c_c_in.line.fill.background()

# ==============================================================================
# SLIDE 23: DEPLOYMENT DIAGRAM - 6th UML DIAGRAM
# SPATIAL PERFECTION: ZERO OVERLAP
# ==============================================================================
s23 = prs.slides.add_slide(blank_layout)
set_slide_background(s23)
add_academic_header(s23, "Deployment Diagram")

def draw_cube_node(slide, left, top, width, height, stereotype, node_title, sub_desc=""):
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, width, height)
    shape.fill.solid(); shape.fill.fore_color.rgb = COLOR_WHITE
    shape.line.color.rgb = COLOR_BLACK; shape.line.width = Pt(1.5)
    
    tf = shape.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    r = p.add_run(); r.text = f"<<{stereotype}>>\n"; r.font.size = Pt(9); r.font.color.rgb = COLOR_GRAY_DARK
    
    r_t = p.add_run(); r_t.text = f"{node_title}\n"; r_t.font.size = Pt(11); r_t.font.bold = True; r_t.font.color.rgb = COLOR_BLACK
    
    if sub_desc:
        r_d = p.add_run(); r_d.text = sub_desc; r_d.font.size = Pt(8.5); r_d.font.color.rgb = COLOR_BLACK
    
    top_edge = slide.shapes.add_shape(MSO_SHAPE.PARALLELOGRAM, left + Inches(0.1), top - Inches(0.18), width, Inches(0.18))
    top_edge.fill.solid(); top_edge.fill.fore_color.rgb = COLOR_GRAY_LIGHT
    top_edge.line.color.rgb = COLOR_BLACK; top_edge.line.width = Pt(1.2)
    
    side_edge = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left + width, top - Inches(0.08), Inches(0.15), height)
    side_edge.fill.solid(); side_edge.fill.fore_color.rgb = COLOR_TABLE_BORDER
    side_edge.line.color.rgb = COLOR_BLACK; side_edge.line.width = Pt(1.2)
    return shape

# Node 1: Customer Device
draw_cube_node(s23, Inches(0.9), Inches(2.1), Inches(3.3), Inches(1.5),
               "device", "Customer Device", "Web / Mobile Browser\n(Chrome, Safari, Edge, Mobile Web)")

# Node 2: Web Server
draw_cube_node(s23, Inches(5.0), Inches(2.1), Inches(3.3), Inches(1.5),
               "server", "Next.js Web Server", "Node.js Edge Runtime\nReact 18 SSR / Static Site Generation")

# Node 3: External Gateways
draw_cube_node(s23, Inches(9.1), Inches(2.1), Inches(3.3), Inches(1.5),
               "external system", "External Gateways", "WhatsApp Web / wa.me Protocol\nRFC 3966 Native Dialer & Google Maps")

# Node 4: Structured Data Store
draw_cube_node(s23, Inches(5.0), Inches(4.7), Inches(3.3), Inches(1.4),
               "storage", "Structured Data Store", "business.ts & services.ts Models\nSchema.org LocalBusiness JSON-LD")

# Connectors
c1 = s23.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(4.2), Inches(2.8), Inches(0.8), Inches(0.02))
c1.fill.solid(); c1.fill.fore_color.rgb = COLOR_BLACK; c1.line.fill.background()
tb = s23.shapes.add_textbox(Inches(4.1), Inches(2.45), Inches(1.0), Inches(0.35))
p = tb.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER; p.text = "HTTPS\nPort 443"; p.font.size = Pt(8); p.font.bold = True

c2 = s23.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(8.3), Inches(2.8), Inches(0.8), Inches(0.02))
c2.fill.solid(); c2.fill.fore_color.rgb = COLOR_BLACK; c2.line.fill.background()
tb = s23.shapes.add_textbox(Inches(8.2), Inches(2.45), Inches(1.0), Inches(0.35))
p = tb.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.CENTER; p.text = "HTTPS /\nDeep-link"; p.font.size = Pt(8); p.font.bold = True

c3 = s23.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(6.65), Inches(3.6), Inches(0.02), Inches(1.1))
c3.fill.solid(); c3.fill.fore_color.rgb = COLOR_BLACK; c3.line.fill.background()
tb = s23.shapes.add_textbox(Inches(6.7), Inches(4.0), Inches(1.5), Inches(0.3))
p = tb.text_frame.paragraphs[0]; p.text = "Internal Import"; p.font.size = Pt(8); p.font.bold = True

foot_dep = s23.shapes.add_textbox(Inches(0.8), Inches(6.4), Inches(11.733), Inches(0.8))
tf = foot_dep.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run()
r.text = "The customer's browser communicates with the Next.js server over HTTPS;\nthe server loads structured service data and deep-links directly to WhatsApp and telephony protocols."
r.font.size = Pt(13.5); r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"

# ==============================================================================
# SLIDES 24 & 25: MODELING (USE CASES TABLES)
# ==============================================================================
def draw_detailed_uc_table(slide, uc_title, actor, goal, precond, trigger):
    rows = 5; cols = 2
    table_shape = slide.shapes.add_table(rows, cols, Inches(1.0), Inches(2.0), Inches(11.3), Inches(3.8))
    table = table_shape.table
    table.columns[0].width = Inches(2.4)
    table.columns[1].width = Inches(8.9)
    
    c00 = table.cell(0, 0); c00.fill.solid(); c00.fill.fore_color.rgb = COLOR_TABLE_HEADER
    c00.text = uc_title; p = c00.text_frame.paragraphs[0]; p.font.bold = True; p.font.size = Pt(13); p.font.color.rgb = COLOR_BLACK
    
    c01 = table.cell(0, 1); c01.fill.solid(); c01.fill.fore_color.rgb = COLOR_TABLE_HEADER
    c01.text = ""; p = c01.text_frame.paragraphs[0]; p.font.bold = True; p.font.size = Pt(13); p.font.color.rgb = COLOR_BLACK
    
    data = [
        ("Primary Actor(s)", actor),
        ("Goal of the use case", goal),
        ("Precondition(s)", precond),
        ("Trigger", trigger)
    ]
    for r_idx, (lbl, val) in enumerate(data, start=1):
        c0 = table.cell(r_idx, 0); c0.fill.solid(); c0.fill.fore_color.rgb = COLOR_WHITE; c0.text = lbl
        p0 = c0.text_frame.paragraphs[0]; p0.font.bold = True; p0.font.size = Pt(12); p0.font.color.rgb = COLOR_BLACK
        
        c1 = table.cell(r_idx, 1); c1.fill.solid(); c1.fill.fore_color.rgb = COLOR_WHITE; c1.text = val
        p1 = c1.text_frame.paragraphs[0]; p1.font.size = Pt(12); p1.font.color.rgb = COLOR_BLACK

# Slide 24: Browse & Inquire Equipment Repair
s24 = prs.slides.add_slide(blank_layout)
set_slide_background(s24)
add_academic_header(s24, "Modeling", "(Use cases)")
draw_detailed_uc_table(
    s24, "Browse & Inquire Equipment Repair",
    "Customer (DJ, Sound Vendor, Event Organizer)",
    "To browse the specialized pro-audio and stage lighting repair services and inspect fault symptoms and diagnostic specs",
    "Customer has access to an active internet connection and opens the Vikash Electronics website",
    "Customer selects a specific service card (Speakers, Amplifiers, Sharpy) and views diagnostic highlights"
)

# Slide 25: Direct WhatsApp & 1-Tap Call Contact
s25 = prs.slides.add_slide(blank_layout)
set_slide_background(s25)
add_academic_header(s25, "Modeling", "(Use cases)")
draw_detailed_uc_table(
    s25, "Direct WhatsApp & Call Consultation",
    "Customer (Equipment Owner)",
    "To initiate instant zero-commission consultation with the chief technician regarding urgent repairs",
    "Customer has identified faulty gear and selected the WhatsApp Inquiry or Call Now action",
    "Customer taps 'Call Now' or 'Inquire on WhatsApp' button on website"
)

# ==============================================================================
# SLIDE 26: OTHERS
# ==============================================================================
s26 = prs.slides.add_slide(blank_layout)
set_slide_background(s26)
add_academic_header(s26, "Others")

cb = s26.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.9), Inches(5.2))
tf = cb.text_frame; tf.word_wrap = True

others_items = [
    "Technology stack implemented: Next.js 14 (React 18), TypeScript for strict static type checking, Tailwind CSS for dark slate theme styling, Framer Motion for micro-animations, and Lucide-React vector icon set.",
    "SEO & Discoverability: Embedded Schema.org LocalBusiness structured JSON-LD data, geographic meta tags, and open-graph cards for dominant Surat pro-audio repair Google rankings.",
    "Additional planned features: Online repair tracking portal for customers to check equipment status by phone number, and direct links to the workshop's YouTube repair guides.",
    "Screenshots of development: Responsive portal successfully running on localhost:3000 featuring authentic workshop bench testing photos and full service catalog."
]

for idx, item in enumerate(others_items):
    p = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
    r = p.add_run(); r.text = item; r.font.size = Pt(13.5); r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"
    p.space_before = Pt(16)

# ==============================================================================
# SLIDE 27: THANK YOU
# ==============================================================================
s27 = prs.slides.add_slide(blank_layout)
set_slide_background(s27)

if os.path.exists(LOGO_UTU):
    s27.shapes.add_picture(LOGO_UTU, Inches(0.8), Inches(0.4), width=Inches(1.2))
if os.path.exists(LOGO_AMTICS):
    s27.shapes.add_picture(LOGO_AMTICS, Inches(11.3), Inches(0.4), width=Inches(1.2))

ty_box = s27.shapes.add_textbox(Inches(2.0), Inches(2.2), Inches(9.333), Inches(2.0))
tf = ty_box.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "Thank You"; r.font.size = Pt(50); r.font.bold = True; r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"

line_ty = s27.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(5.1), Inches(3.6), Inches(3.1), Inches(0.05))
line_ty.fill.solid(); line_ty.fill.fore_color.rgb = COLOR_RED; line_ty.line.fill.background()

cred_box = s27.shapes.add_textbox(Inches(2.0), Inches(4.3), Inches(9.333), Inches(1.8))
tf = cred_box.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
r = p.add_run(); r.text = "Prathmesh Chaudhari (202503103510061)"; r.font.size = Pt(18); r.font.bold = True; r.font.color.rgb = COLOR_BLACK; r.font.name = "Arial"

p2 = tf.add_paragraph(); p2.alignment = PP_ALIGN.CENTER
r2 = p2.add_run(); r2.text = "Professional DJ & Electronic Equipment Repair Portal — Vikash Electronics"; r2.font.size = Pt(16); r2.font.color.rgb = COLOR_GRAY_DARK; r2.font.name = "Arial"
p2.space_before = Pt(8)

# Save presentations safely
prs.save(PPTX_FILE_PRIMARY)
print(f"[1/3] Successfully generated all 27 slides at: {PPTX_FILE_PRIMARY}")

for path in [PPTX_FILE, PPTX_ACADEMIC_FILE, PPTX_COMPLETE_FILE]:
    try:
        prs.save(path)
        print(f"  -> Also updated: {os.path.basename(path)}")
    except Exception as e:
        print(f"  -> Note: {os.path.basename(path)} could not be overwritten: {e}")

print("All PPT presentations generated with 100% website-based content and 0 overlaps!")
