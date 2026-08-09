# Roie Ihia — Engineering Portfolio (static site)

A clean, dependency-free static site: `index.html` + `css/` + `js/` + `images/`. No build step, no framework. Hosts free on GitHub Pages.

---

## 1. Put it online (GitHub Pages)

1. Create a new GitHub repository named **exactly** `roieihi.github.io` (lowercase, your username).
2. Copy everything in this folder into the repo (or drag-and-drop the files in the GitHub web uploader).
3. Push / commit. Then go to **Settings → Pages** and confirm the source is the `main` branch, root.
4. In about a minute your site is live at **https://roieihi.github.io**.

Put that URL on your résumé header, LinkedIn, and email signature.

### Preview locally first (optional)
```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

---

## 2. What to fill in

The site works as-is, but these placeholders are yours to complete:

| Where | What to update |
|---|---|
| Publications | Replace both **`Status: to confirm`** tags with the real status; link a DOI/preprint once published. |
| Contact footer | Real email, LinkedIn URL (GitHub is already set). |
| `assets/` | Drop in `Resume-Roie-Ihia.pdf`, `antenna-report.pdf`, `dwt-report.pdf` (links already point here). |
| DL/CV project | The one card I didn't have full details for — add a real objective, result, and repo link. |
| `PIN_Opt` link | Currently points to `ilaish5/PIN_Opt`. If you fork it under your account, update the two links. |

---

## 3. Swap the placeholder figures for your real ones

Every figure in `images/` is an on-theme **placeholder** (a mini-plot labeled "swap in your export"). To use a real figure, export it from HFSS / Lumerical / MATLAB / your notebook and either:

- **Simplest:** save your real image, then update the `src` in `index.html` to point at it (e.g. `images/antenna_s11.png`), or
- Keep the filename and just replace the file.

Placeholder → what real figure belongs there:

| File | Drop in |
|---|---|
| `pin_efficiency_loss.svg` | Efficiency-vs-loss scatter with your located optimum |
| `pin_convergence.svg` | BO cost-convergence plot |
| `antenna_s11.svg` | Your HFSS S11 curve |
| `antenna_pattern.svg` | Realized-gain / radiation pattern |
| `antenna_model.svg` | HFSS model of the PIFA in the boot |
| `gaze_trajectory.svg` | Gaze-trajectory plot |
| `gaze_pipeline.svg` | Pipeline / calibration figure |
| `deepfake_spectrum.svg` | Real-vs-fake spectra |
| `deepfake_accuracy.svg` | Classifier accuracy comparison |
| `dwt_denoise.svg` | Denoising pipeline figure |
| `dwt_snr.svg` | SNR / MSE curves |
| `dlcv_project.svg` | A representative figure from the DL/CV project |

---

## 4. Editing it later with Claude Code

This is why it's a plain static site — every change is a one-sentence request. From the repo folder, run `claude` (or use the VS Code extension) and try:

- "Replace the antenna figures with these three PNGs I just added to images/."
- "Add a new project card under RF & Antennas for my transmission-line design, same format as the others."
- "Fill in the DL/CV card: objective, result, and link to this repo."
- "Change the accent color from teal to a deep blue and update the notch dividers to match."
- "Add a Work Experience page linked from the nav."

---

## Structure

```
portfolio/
├── index.html
├── css/style.css
├── js/main.js
├── images/            # placeholder figures (swap in your exports)
├── assets/            # put your PDFs here (résumé, reports)
└── README.md
```

## Design notes

- **Signature:** a swept frequency-response trace (an S11 resonance dip) — the frequency domain is the through-line across your photonics, RF, and signal-processing work — reappears as the thin notch dividers between sections.
- **Palette:** cool "graticule paper" with a phosphor-teal scope-trace accent; amber used only as a second trace.
- **Type:** Space Grotesk (display) + IBM Plex Sans / Mono (body + instrument-readout labels).
- Responsive to mobile, keyboard-focus visible, respects `prefers-reduced-motion`. Content stays visible with JavaScript disabled.
