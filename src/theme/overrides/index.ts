import { Theme } from '@mui/material/styles'
// import Fab from './Fab'
// import Card from './Card'
// import Chip from './Chip'
// import Tabs from './Tabs'
// import Menu from './Menu'
// import Link from './Link'
// import Lists from './Lists'
// import Table from './Table'
// import Alert from './Alert'
// import Badge from './Badge'
// import Paper from './Paper'
// import Input from './Input'
// import Radio from './Radio'
import IconButton from './IconButton'
import Button from './Button'
import Drawer from './Drawer'
import Paper from './Paper'
// import Dialog from './Dialog'
// import Avatar from './Avatar'
// import Rating from './Rating'
// import Slider from './Slider'
// import Switch from './Switch'
// import Select from './Select'
// import SvgIcon from './SvgIcon'
// import Tooltip from './Tooltip'
// import Popover from './Popover'
// import Stepper from './Stepper'
// import DataGrid from './DataGrid'
// import Skeleton from './Skeleton'
// import Backdrop from './Backdrop'
// import Progress from './Progress'
// import Timeline from './Timeline'
// import TreeView from './TreeView'
// import Checkbox from './Checkbox'
// import Container from './Container'
// import Accordion from './Accordion'
// import Typography from './Typography'
// import Pagination from './Pagination'
// import ButtonGroup from './ButtonGroup'
// import Autocomplete from './Autocomplete'
// import ToggleButton from './ToggleButton'
// import ControlLabel from './ControlLabel'
// import LoadingButton from './LoadingButton'

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    // Link(),
    // Badge(),
    // Select(),
    // SvgIcon(),
    // Container(),
    // LoadingButton(),
    // Fab(theme),
    // Tabs(theme),
    // Chip(theme),
    // Card(theme),
    // Menu(theme),
    // Input(theme),
    // Radio(theme),
    // Lists(theme),
    // Table(theme),
    // Alert(theme),
    // Switch(theme),
    // Rating(theme),
    // Dialog(theme),
    // Avatar(theme),
    // Slider(theme),
    Paper(theme),
    Button(theme),
    IconButton(theme),
    Drawer(theme),
    // Stepper(theme),
    // Tooltip(theme),
    // Popover(theme),
    // Checkbox(theme),
    // DataGrid(theme),
    // Skeleton(theme),
    // Timeline(theme),
    // TreeView(theme),
    // Backdrop(theme),
    // Progress(theme),
    // Accordion(theme),
    // Typography(theme),
    // Pagination(theme),
    // ButtonGroup(theme),
    // Autocomplete(theme),
    // ControlLabel(theme),
    // ToggleButton(theme)
  )
}
